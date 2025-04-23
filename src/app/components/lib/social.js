/* import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; */

export const social = [
  { url: 'https://instagram.com/' + process.env.NEXT_PUBLIC_IG, title: 'instagram', handle: '@' + process.env.NEXT_PUBLIC_IG, icon:'tag' },
  /*   {url:'', title: 'x', handle: '@handle' }, */
  { url: 'http://wa.me/' + process.env.NEXT_PUBLIC_WHATSAPP, title: 'whatsapp', handle: '656828317', icon: 'message' },
  { url: 'mailto:' + process.env.NEXT_PUBLIC_EMAIL, title: 'email', handle: 'soluciones@superbeam.es', icon: 'mail' },
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
