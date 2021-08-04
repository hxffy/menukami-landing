export default function MobileLayout({ children, className }) {
  return <div className={`max-w-xl mx-auto w-full relative ${className}`}>{children}</div>
}
