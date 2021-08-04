import Link from 'next/link'

export default function Brand() {
  return (
    <div className="bg-white p-4 flex items-center">
      <Link href="https://menukami.com/">
        <span className="flex items-center space-x-2 text-gray-500 flex-1 cursor-pointer">
          <img src="/images/logo-dark.png" className="w-6 h-6" alt="Menukami logo" />
          <small className="flex flex-col leading-3">
            <small>powered by</small>
            <span className="font-bold" style={{ letterSpacing: '-1.75px' }}>
              menukami
            </span>
          </small>
        </span>
      </Link>
    </div>
  )
}
