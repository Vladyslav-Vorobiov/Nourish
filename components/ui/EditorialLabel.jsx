export function EditorialLabel({ children, className = "" }) {
  return (
    <span
      className={`text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
