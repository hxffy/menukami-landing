export default function DesktopLayout({ children, className }) {
  return <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>
}
