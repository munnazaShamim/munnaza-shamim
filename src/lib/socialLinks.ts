import { ComponentType } from 'react';
import { WhatsappIcon, FacebookIcon, InstagramIcon, LinkedinIcon, GithubIcon } from '@/lib/icons/BrandIcons';

export const PHONE_DISPLAY = '+92 303 8489822';
export const WHATSAPP_NUMBER = '923038489822';
export const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;
export const EMAIL = 'munnazashamim786@gmail.com';
export const EMAIL_LINK = `mailto:${EMAIL}`;
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Munnaza, I found your portfolio and I'd like to talk about a project.";

export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = getWhatsAppLink();

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
    label: 'GitHub',
    href: 'https://github.com/munnazaShamim',
    icon: GithubIcon,
    glowColor: 'rgba(139, 148, 158, 0.45)',
    hoverClass: 'hover:bg-[#24292F] hover:border-[#8B949E]',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/munnaza-shamim/',
    icon: LinkedinIcon,
    glowColor: 'rgba(10, 102, 194, 0.45)',
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/munnaza.shamim.7',
    icon: FacebookIcon,
    glowColor: 'rgba(24, 119, 242, 0.45)',
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/munnaza.shamim/',
    icon: InstagramIcon,
    glowColor: 'rgba(238, 42, 123, 0.45)',
    hoverClass:
      'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent',
  },
];
