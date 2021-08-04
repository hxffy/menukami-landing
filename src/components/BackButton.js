import { useRouter } from 'next/router'

export default function BackButton({ onClick }) {
  const router = useRouter()
  return (
    <div
      className="bg-gray-100 rounded-full p-1 border border-gray-200 hover:border-gray-500 transition duration-300 focus:outline-none"
      onClick={() => (onClick ? onClick() : router.back())}
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-blue-500"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  )
}
