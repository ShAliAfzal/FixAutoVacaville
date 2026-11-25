"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { track } from "@/lib/analytics";
import { business } from "@/lib/site";
import { services } from "@/lib/services";
import { TrackedA } from "@/components/ui/TrackedLink";

type Status = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  ...services.map((s) => s.name),
  "Not sure / Other",
];

export function EstimateForm({
  source = "form",
  compact = false,
}: {
  source?: string;
  compact?: boolean;
}) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [started, setStarted] = useState(false);

  const markStart = () => {
    if (started) return;
    setStarted(true);
    track("estimate_form_start", { source });
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (String(data.get("company_website") || "").trim()) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setMessage("");

    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      year: String(data.get("year") || "").trim(),
      make: String(data.get("make") || "").trim(),
      model: String(data.get("model") || "").trim(),
      service: String(data.get("service") || "").trim(),
      description: String(data.get("description") || "").trim(),
      preferredContact: String(data.get("preferredContact") || "phone").trim(),
      source,
    };

    if (!payload.name || !payload.phone) {
      setStatus("error");
      setMessage("Please add your name and a phone number so we can reach you.");
      track("estimate_form_error", { reason: "missing_required", source });
      return;
    }

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string; delivered?: boolean };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Unable to submit right now.");
      }

      setStatus("success");
      track("estimate_form_submit", {
        source,
        service: payload.service,
        delivered: json.delivered ?? false,
      });
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call us instead.",
      );
      track("estimate_form_error", { reason: "network", source });
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 sm:p-8" role="status">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-extrabold text-navy-900">Request received</h3>
            <p className="mt-2 text-slate-600">
              Thank you. We will follow up during business hours
              ({business.hoursSummary.split(" · ")[0]}). For faster help, call the shop now.
            </p>
            <TrackedA
              href={business.phoneHref}
              event="phone_click"
              payload={{ location: "estimate_success" }}
              className="btn-primary mt-5"
            >
              Call {business.phone}
            </TrackedA>
          </div>
        </div>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-line bg-white px-3.5 py-3 text-[0.95rem] text-ink outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";
  const label = "mb-1.5 block text-sm font-bold text-navy-900";

  return (
    <form
      onSubmit={onSubmit}
      onFocus={markStart}
      className={compact ? "space-y-4" : "space-y-5"}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${id}-name`}>
            Full name *
          </label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            className={field}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-phone`}>
            Phone *
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={field}
            placeholder="(707) 555-0123"
          />
        </div>
      </div>

      <div>
        <label className={label} htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          className={field}
          placeholder="you@email.com"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className={label} htmlFor={`${id}-year`}>
            Year
          </label>
          <input id={`${id}-year`} name="year" className={field} placeholder="2022" inputMode="numeric" />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-make`}>
            Make
          </label>
          <input id={`${id}-make`} name="make" className={field} placeholder="Toyota" />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-model`}>
            Model
          </label>
          <input id={`${id}-model`} name="model" className={field} placeholder="Camry" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${id}-service`}>
            Service needed
          </label>
          <select id={`${id}-service`} name="service" className={field} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor={`${id}-contact`}>
            Preferred contact
          </label>
          <select
            id={`${id}-contact`}
            name="preferredContact"
            className={field}
            defaultValue="phone"
          >
            <option value="phone">Phone call</option>
            <option value="text">Text message</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor={`${id}-desc`}>
          Damage or issue
        </label>
        <textarea
          id={`${id}-desc`}
          name="description"
          rows={4}
          className={field}
          placeholder="Briefly describe what happened and where the damage is."
        />
      </div>

      {/* Honeypot - visually and accessibly hidden */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {message}{" "}
          <a className="font-bold underline" href={business.phoneHref}>
            Call {business.phone}
          </a>
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Request an Estimate"
        )}
      </button>

      <p className="text-xs leading-relaxed text-slate-400">
        By submitting, you agree we may contact you about this estimate request. We do not sell your
        information. Prefer to talk now?{" "}
        <a href={business.phoneHref} className="font-semibold text-blue-600 hover:underline">
          {business.phone}
        </a>
      </p>
    </form>
  );
}
