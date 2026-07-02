export function Avatar({ size = 128 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center rounded-full border-2 border-pink-400 bg-white text-pink-800"
    >
      <span className="text-sm text-foreground/40">Add photo</span>
    </div>
  );
}
