import { Instagram, Mail, MessageCircle } from "lucide-react";

export const social = [
  { url: 'https://instagram.com/' + process.env.NEXT_PUBLIC_IG, title: 'instagram', handle: '@' + process.env.NEXT_PUBLIC_IG, iconLucide:<Instagram size={45}/>,icon:'tag' },
  { url: 'http://wa.me/' + process.env.NEXT_PUBLIC_WHATSAPP, title: 'whatsapp', handle: '+34684733998', iconLucide:<MessageCircle size={45}/>,icon: 'message' },
  { url: 'mailto:' + process.env.NEXT_PUBLIC_EMAIL, title: 'email', handle: process.env.NEXT_PUBLIC_EMAIL, iconLucide:<Mail size={45}/>,icon: 'mail' },
];
export const nosotros = [
/*   { url: '/webmaster', title: 'Webmaster' },
  { url: '/tarifas', title: 'Tarifas' }, */
  { url: '#footer', title: 'Contacto' },
];
export const servicios = [
  { url: '/headless-prestashop-cms', title: 'Ecommerce' },
  { url: '/app', title: 'App' },
  { url: '/', title: 'Webs' },
];
