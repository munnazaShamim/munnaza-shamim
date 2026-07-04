import Image from 'next/image';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import type { CaseStudy } from '@/lib/caseStudies';

interface CaseStudyThumbnailProps {
  study: CaseStudy;
  aspect?: string;
  className?: string;
  priority?: boolean;
  fit?: 'cover' | 'contain';
}

export default function CaseStudyThumbnail({
  study,
  aspect = 'aspect-video',
  className = '',
  priority = false,
  fit = 'cover',
}: CaseStudyThumbnailProps) {
  const cover = study.gallery?.[0];

  if (!cover) {
    return <ImagePlaceholder label={study.imageLabel} aspect={aspect} className={className} />;
  }

  return (
    <div
      className={`${aspect} w-full rounded-xl border border-border overflow-hidden relative ${
        fit === 'contain' ? 'bg-secondaryBackground' : ''
      } ${className}`}
    >
      <Image
        src={cover.src}
        alt={cover.label}
        fill
        className={fit === 'contain' ? 'object-contain p-2' : 'object-cover object-top'}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}
