import Link from "next/link";

const variants = {
  primary:
    "bg-ink text-text-inverse hover:bg-ink-hover focus-visible:bg-ink-hover",
  secondary:
    "border border-ink bg-transparent text-ink hover:bg-surface-2 focus-visible:bg-surface-2",
  inverse:
    "bg-surface text-ink hover:bg-surface-2 focus-visible:bg-surface-2",
  text: "px-0 text-ink underline-offset-4 hover:underline focus-visible:underline",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const shared = `inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-medium tracking-[0.02em] transition-colors duration-200 cursor-pointer ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={shared} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={shared} {...props}>
      {children}
    </button>
  );
}
