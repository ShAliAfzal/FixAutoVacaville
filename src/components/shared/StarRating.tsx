let starUid = 0;

export function StarRating({
  rating = 4.7,
  size = 16,
  className = "",
}: {
  rating?: number;
  size?: number;
  className?: string;
}) {
  const uid = `sr${++starUid}`;
  const full = Math.floor(rating);
  const partial = rating - full;
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className || "text-signal"}`}
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill =
          i < full ? 1 : i === full ? Math.max(0, Math.min(1, partial)) : 0;
        const gid = `${uid}-${i}`;
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="shrink-0"
          >
            <defs>
              <linearGradient id={gid}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M12 2.5l2.9 6.1 6.6.7-4.9 4.5 1.4 6.5L12 16.9 5.9 20.3l1.4-6.5L2.5 9.3l6.6-.7L12 2.5z"
              fill={`url(#${gid})`}
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        );
      })}
    </span>
  );
}
