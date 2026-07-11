import Link from 'next/link';
import { getWhatsAppLink } from '@/lib/socialLinks';
import RightArrow from '@/lib/icons/ArrowRight';
interface CaseStudyCTAProps {
  text: string;
}

export default function CaseStudyCTA({ text }: CaseStudyCTAProps) {
  return (
    <div className="text-center border-t border-border pt-12">
      <h2 className="text-2xl font-bold mb-4">Have a similar system to build?</h2>
      <p className="text-secondaryText mb-8 max-w-xl mx-auto">{text}</p>
      <Link
        href={getWhatsAppLink()}
        className="group btn-hover-cta inline-flex items-center gap-2 px-8 py-4 bg-ctaAccent text-background font-semibold rounded-lg hover:bg-ctaAccentHover transition-colors"
      >
        Start Your Project
        <RightArrow size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
