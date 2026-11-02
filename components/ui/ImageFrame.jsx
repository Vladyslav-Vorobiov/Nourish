import Image from "next/image";

export function ImageFrame({ src, alt, className = "", priority = false, ...props }) {
  return (
    <figure className={`overflow-hidden bg-surface-2 ${className}`}>
      <Image src={src} alt={alt} priority={priority} {...props} />
    </figure>
  );
}
