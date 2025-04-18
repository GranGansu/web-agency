import { Footer, Nav } from '../layout';

export default function Layout({ children, fuente }) {
  return (
    <div className={`${fuente}`}>
      {children}
      <Footer />
    </div>
  );
}
