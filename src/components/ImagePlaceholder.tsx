interface ImagePlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspect = 'aspect-video',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspect} w-full rounded-xl border border-dashed border-border bg-cardBackground/50 flex items-center justify-center text-center px-4 ${className}`}
    >
      <span className="text-secondaryText text-xs md:text-sm">{label}</span>
    </div>
  );
}
