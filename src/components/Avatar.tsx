import Image from "next/image";

export function Avatar({ size = 128 }: { size?: number }) {
  return (
    <Image
      src="/me.webp"
      alt="Aashrita Natesan"
      width={size}
      height={size}
      priority
      className="grayscale object-cover"
      style={{
        width: size,
        height: size,
        objectPosition: "50% 15%",
        border: "1px solid #0a0a0a",
      }}
    />
  );
}
