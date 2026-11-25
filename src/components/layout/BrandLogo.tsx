import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site";

type Props = {
  /** Dark header/footer backgrounds use the white mark */
  variant?: "white" | "navy";
  /** Visual scale */
  size?: "md" | "lg" | "xl";
  showLocation?: boolean;
  className?: string;
};

const sizes = {
  md: { height: 48, width: 85, className: "h-12 w-auto" },
  lg: { height: 64, width: 113, className: "h-14 w-auto sm:h-16" },
  xl: { height: 76, width: 135, className: "h-[3.75rem] w-auto sm:h-[4.35rem]" },
} as const;

export function BrandLogo({
  variant = "white",
  size = "lg",
  showLocation = true,
  className = "",
}: Props) {
  const dim = sizes[size];
  const src =
    variant === "white"
      ? "/brand/fixauto-logo-white.png"
      : "/brand/fixauto-logo-navy.png";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 sm:gap-3.5 ${className}`}
      aria-label={`${business.name} home`}
    >
      <span className="relative inline-flex shrink-0 transition duration-300 group-hover:brightness-110">
        <span
          className="pointer-events-none absolute -inset-2 rounded-lg bg-blue-500/10 blur-md"
          aria-hidden="true"
        />
        <Image
          src={src}
          alt="Fix Auto"
          width={dim.width}
          height={dim.height}
          className={`relative ${dim.className} object-contain object-left drop-shadow-[0_2px_12px_rgb(43_114_234_/_0.35)]`}
          priority
        />
      </span>
      {showLocation && (
        <span
          className={`flex flex-col justify-center border-l pl-3 sm:pl-4 ${
            variant === "white" ? "border-white/25" : "border-navy-900/20"
          }`}
        >
          <span
            className={`text-[0.62rem] font-bold uppercase tracking-[0.2em] sm:text-[0.7rem] sm:tracking-[0.22em] ${
              variant === "white" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Location
          </span>
          <span
            className={`text-sm font-extrabold tracking-wide sm:text-[1.05rem] ${
              variant === "white" ? "text-white" : "text-navy-900"
            }`}
          >
            Vacaville
          </span>
        </span>
      )}
    </Link>
  );
}
