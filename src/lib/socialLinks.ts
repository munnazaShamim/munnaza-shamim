import { ComponentType } from 'react';
import { WhatsappIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export const PHONE_DISPLAY = '+92 303 8489822';
export const WHATSAPP_URL = 'https://wa.me/923038489822';

export interface SocialLinkData {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  glowColor: string;
  hoverClass: string;
}

export const socialLinks: SocialLinkData[] = [
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: WhatsappIcon,
    glowColor: 'rgba(37, 211, 102, 0.45)',
    hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366]',
  },
  {
    label: 'Facebook',
    // TODO: replace with real Facebook page URL
    href: '#',
    icon: FacebookIcon,
    glowColor: 'rgba(24, 119, 242, 0.45)',
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
  },
  {
    label: 'Instagram',
    // TODO: replace with real Instagram profile URL
    href: '#',
    icon: InstagramIcon,
    glowColor: 'rgba(238, 42, 123, 0.45)',
    hoverClass:
      'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent',
  },
  {
    label: 'LinkedIn',
    // TODO: replace with real LinkedIn profile URL
    href: '#',
    icon: LinkedinIcon,
    glowColor: 'rgba(10, 102, 194, 0.45)',
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
  },
];
