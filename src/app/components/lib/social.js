import { Instagram, Mail, MessageCircle } from "lucide-react";

export const social = [
  { url: 'https://instagram.com/' + process.env.NEXT_PUBLIC_IG, title: 'instagram', handle: '@' + process.env.NEXT_PUBLIC_IG, iconLucide:<Instagram size={45}/>,icon:'tag' },
  { url: 'http://wa.me/' + process.env.NEXT_PUBLIC_WHATSAPP, title: 'whatsapp', handle: '656828317', iconLucide:<MessageCircle size={45}/>,icon: 'message' },
  { url: 'mailto:' + process.env.NEXT_PUBLIC_EMAIL, title: 'email', handle: 'soluciones@superbeam.es', iconLucide:<Mail size={45}/>,icon: 'mail' },
];
export const nosotros = [
  { url: '/webmaster', title: 'Webmaster' },
  { url: '/tarifas', title: 'Tarifas' },
  { url: '/contacto', title: 'Contacto' },
];
export const servicios = [
  { url: '/webmaster', title: 'Ecommerce' },
  { url: '/tarifas', title: 'Web Empresa' },
  { url: '/contacto', title: 'Web Personal' },
];
