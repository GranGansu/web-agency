export default function Absolute({ children, className }) {
  return <div className={`absolute left-0 top-0 w-full h-full ${className}`}>{children}</div>;
}
