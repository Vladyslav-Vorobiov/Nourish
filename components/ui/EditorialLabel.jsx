export function EditorialLabel({ children, tone = "default", className = "" }) {
  const color = tone === "inverse" ? "text-surface-2" : "text-text-secondary";
  return (
    <span
      className={`text-[0.6875rem] font-medium uppercase tracking-[0.12em] ${color} ${className}`}
    >
      {children}
    </span>
  );
}
