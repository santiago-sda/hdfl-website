import Image from "next/image";

interface CoachAvatarProps {
  name: string;
  image?: string;
  alt?: string;
  className?: string;
  sizes?: string;
}

function initialsOf(name: string) {
  return name
    .replace(/[“”"].*?[“”"]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Square headshot frame. Renders the photo when one is supplied, otherwise a clean
// initials placeholder, so every card keeps the same proportions.
export function CoachAvatar({ name, image, alt, className = "", sizes = "(max-width: 768px) 100vw, 360px" }: CoachAvatarProps) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden bg-paper-alt ${className}`}>
      {image ? (
        <Image src={image} alt={alt ?? `Headshot of ${name}`} fill sizes={sizes} className="object-cover" />
      ) : (
        <div role="img" aria-label={`${name} — headshot not yet available`} className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center justify-center w-[46%] aspect-square rounded-full bg-um-green text-paper text-[38px] md:text-[48px] font-extrabold tracking-[-0.04em]">
            {initialsOf(name)}
          </span>
        </div>
      )}
    </div>
  );
}
