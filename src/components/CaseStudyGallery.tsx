'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { CaseStudyImage } from '@/lib/caseStudies';

interface CaseStudyGalleryProps {
  gallery: CaseStudyImage[];
}

export default function CaseStudyGallery({ gallery }: CaseStudyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);

  useEffect(() => {
    if (!isLightboxOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setIsZoomed(false);
        setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      } else if (e.key === 'ArrowRight') {
        setIsZoomed(false);
        setActiveIndex((prev) => (prev + 1) % gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, gallery.length]);

  if (gallery.length === 0) {
    return null;
  }

  const active = gallery[activeIndex];

  const openLightbox = () => {
    setIsZoomed(false);
    setIsLightboxOpen(true);
  };

  const showPrev = () => {
    setIsZoomed(false);
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const showNext = () => {
    setIsZoomed(false);
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  };

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragScrollStart.current = scrollRef.current.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return;
    scrollRef.current.scrollLeft = dragScrollStart.current - (e.clientX - dragStartX.current);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="mb-14">
      <button
        type="button"
        onClick={openLightbox}
        aria-label="View full screen"
        className="group mb-4 aspect-video w-full rounded-2xl border border-border overflow-hidden relative block cursor-zoom-in"
      >
        <Image
          key={active.src}
          src={active.src}
          alt={active.label}
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            Click to view full screen
          </span>
        </span>
      </button>

      {gallery.length > 1 && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Scroll thumbnails left"
            onClick={() => scrollByAmount(-240)}
            className="shrink-0 bg-cardBackground border border-border rounded-full w-9 h-9 flex items-center justify-center text-primaryText hover:bg-secondaryBackground transition-colors"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="flex gap-3 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-1"
          >
            {gallery.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="shrink-0 w-32 md:w-36 flex flex-col gap-1.5 text-left"
              >
                <div
                  className={`aspect-video w-full rounded-lg border overflow-hidden relative transition-opacity ${
                    index === activeIndex
                      ? 'border-primaryAccent ring-2 ring-primaryAccent/40'
                      : 'border-border opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    className="object-cover object-top pointer-events-none"
                    sizes="150px"
                  />
                </div>
                <span className="text-[11px] leading-tight text-secondaryText text-center">
                  {image.label}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll thumbnails right"
            onClick={() => scrollByAmount(240)}
            className="shrink-0 bg-cardBackground border border-border rounded-full w-9 h-9 flex items-center justify-center text-primaryText hover:bg-secondaryBackground transition-colors"
          >
            ›
          </button>
        </div>
      )}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center px-4 py-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close full screen view"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
          >
            ✕
          </button>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl"
              >
                ›
              </button>
            </>
          )}

          <div
            className={`relative w-full h-full max-w-6xl ${
              isZoomed
                ? 'overflow-auto cursor-zoom-out'
                : 'overflow-hidden flex items-center justify-center cursor-zoom-in'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed((prev) => !prev);
            }}
          >
            {isZoomed ? (
              <div className="relative w-[180%] h-[180%] min-w-full min-h-full">
                <Image src={active.src} alt={active.label} fill className="object-contain" sizes="180vw" />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image src={active.src} alt={active.label} fill className="object-contain" sizes="100vw" />
              </div>
            )}
          </div>

          <span className="mt-4 text-sm text-white/70">{active.label}</span>
        </div>
      )}
    </div>
  );
}
