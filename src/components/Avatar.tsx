import Image from "next/image";

export function Avatar({ size = 128 }: { size?: number }) {
  return (
    <Image
      src="/me.webp"
      alt="Aashrita Natesan"
      width={size}
      height={size}
      priority
      className="rounded-full border-2 border-pink-400 object-cover"
      style={{ width: size, height: size }}
    />
  );
}
