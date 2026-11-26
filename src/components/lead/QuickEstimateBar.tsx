"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { track } from "@/lib/analytics";
import { business } from "@/lib/site";
import { TrackedA } from "@/components/ui/TrackedLink";

type Status = "idle" | "submitting" | "success" | "error";

/** Compact 3-field estimate capture for final CTA / high-intent surfaces. */
export function QuickEstimateBar({ source = "final_cta_inline" }: { source?: string }) {
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

    if (String(data.get("company_website") || "").trim()) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();

    if (!name || !phone) {
      setStatus("error");
      setMessage("Add your name and phone so we can call you back.");
      track("estimate_form_error", { reason: "missing_required", source });
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          description: vehicle ? `Vehicle: ${vehicle}` : "",
          service: "Not sure / Other",
          preferredContact: "phone",
          source,
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string; delivered?: boolean };
      if (!res.ok || !json.ok) throw new Error(json.error || "Unable to submit right now.");

      setStatus("success");
      track("estimate_form_submit", { source, delivered: json.delivered ?? false });
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please call us.");
      track("estimate_form_error", { reason: "network", source });
    }
  }

  if (status === "success") {
    return (
      <div
        className="mx-auto max-w-3xl rounded-xl border border-white/15 bg-white/10 px-5 py-5 text-left backdrop-blur-sm"
        role="status"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-blue-400" aria-hidden="true" />
          <div>
            <p className="text-lg font-extrabold text-white">Request received</p>
            <p className="mt-1 text-sm text-white/70">
              We will follow up during shop hours. For faster help, call now.
            </p>
            <TrackedA
              href={business.phoneHref}
              event="phone_click"
              payload={{ location: source }}
              className="btn-primary mt-4"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phone}
            </TrackedA>
          </div>
        </div>
      </div>
    );
  }

  const field =
    "w-full rounded-md border border-white/15 bg-navy-950/55 px-3.5 py-3 text-[0.95rem] text-white outline-none placeholder:text-white/40 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30";

  return (
    <form
      onSubmit={onSubmit}
      onFocus={markStart}
      className="mx-auto w-full max-w-4xl rounded-xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-sm sm:p-5"
      noValidate
    >
      <p className="mb-3 text-sm font-bold text-white/85">Quick photo estimate request</p>
      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label className="sr-only" htmlFor={`${id}-name`}>
            Full name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder="Your name *"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor={`${id}-phone`}>
            Phone
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
            placeholder="Phone *"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor={`${id}-vehicle`}>
            Vehicle year, make, model
          </label>
          <input
            id={`${id}-vehicle`}
            name="vehicle"
            className={field}
            placeholder="Year / make / model"
          />
        </div>
      </div>

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
        <p className="mt-3 text-sm text-red-200" role="alert">
          {message}{" "}
          <a className="font-bold underline" href={business.phoneHref}>
            Call {business.phone}
          </a>
        </p>
      )}

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/55">
          Prefer photos first? Email {business.email} or call after submitting.
        </p>
        <button
          type="submit"
          className="btn-primary shrink-0"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Get my estimate"
          )}
        </button>
      </div>
    </form>
  );
}
