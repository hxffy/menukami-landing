import MobileLayout from 'layouts/MobileLayout'
import { useRouter } from 'next/router'

export default function FullScreenError() {
  const router = useRouter()
  return (
    <MobileLayout>
      <div className="flex flex-col w-full h-screen justify-center items-center">
        <p className="text-xl text-gray-600">Terjadi kesalahan</p>
        <button className="text-blue-500" onClick={() => router.back()}>
          ← Kembali
        </button>
      </div>
    </MobileLayout>
  )
}
