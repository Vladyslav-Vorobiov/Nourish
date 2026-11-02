export function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-5 md:px-8 xl:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
