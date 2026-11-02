import Image from "next/image";

export function ImageFrame({ src, alt, className = "", priority = false, ...props }) {
  return (
    <figure className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <Image className="absolute inset-0 h-full w-full object-cover" src={src} alt={alt} priority={priority} {...props} />
    </figure>
  );
}
