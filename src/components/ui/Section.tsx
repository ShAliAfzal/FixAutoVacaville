import type { ReactNode } from "react";

type Tone = "paper" | "mist" | "navy";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  mist: "bg-mist text-ink",
  navy: "bg-navy-900 text-white",
};

export function Section({
  id,
  tone = "paper",
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`} data-reveal>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${dark ? "text-blue-400" : "text-blue-600"} ${center ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <Tag id={id} className={`headline-lg ${dark ? "text-white" : "text-navy-900"}`}>
        {title}
      </Tag>
      {lede && <p className={`lede mt-5 ${dark ? "text-white/70" : ""}`}>{lede}</p>}
    </div>
  );
}
