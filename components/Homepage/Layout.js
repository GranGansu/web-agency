import { Footer, Nav } from '../layout';
import Main from './Main';

export default function Layout({ children, fuente }) {
  return (
    <div className={`${fuente}`}>
{/*       <Nav /> */}
      {children}
      <Footer  />
    </div>
  );
}
