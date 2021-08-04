import HomeFooter from 'components/HomeFooter'
import HomeHeader from 'components/HomeHeader'
import DesktopLayout from 'layouts/DesktopLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  AiOutlineFilePdf,
  AiOutlineShopping,
  AiOutlineDollarCircle,
  AiOutlineQrcode,
  AiOutlineCustomerService,
  AiOutlineFileDone,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

function HeroTitle({ children, className }) {
  return (
    <Fade bottom>
      <h1 className={`text-3xl md:text-5xl font-bold tracking-tight font-lpTitle ${className}`}>
        {children}
      </h1>
    </Fade>
  )
}

function SectionTitle({ children, className }) {
  return (
    <Fade bottom>
      <h2
        className={`text-3xl md:text-4xl leading-tight font-bold tracking-tight text-center mb-24 font-lpTitle ${className}`}
      >
        {children}
      </h2>
    </Fade>
  )
}

function SectionDescription({ children, className }) {
  return (
    <Fade bottom>
      <h3 className={`text-sm md:text-xl text-gray-600 ${className}`}>{children}</h3>
    </Fade>
  )
}

function Hero() {
  const router = useRouter()
  return (
    <div className="bg-white">
      <DesktopLayout>
        <div className="md:flex py-12 ">
          <div className="md:w-1/2 md:py-12 pl-16 md:pl-32 relative md:hidden">
            <div className="w-full">
              <Fade right>
                <img
                  src="/images/women-with-phone.jpeg"
                  alt=""
                  className="rounded-3xl w-full h-full object-cover transform"
                />
              </Fade>
            </div>
            <Fade bottom>
              <img
                src="/images/cacastore-screenshot.png"
                alt=""
                className="absolute top-0 left-0 w-32 md:w-48 mt-16 md:mt-32 transform shadow-2xl rounded-xl"
              />
            </Fade>
          </div>
          <div className="md:w-1/2 md:px-12 flex flex-col justify-center relative mt-12 md:mt-0">
            <HeroTitle>Jualan Online</HeroTitle>
            <HeroTitle>Jadi Lebih Mudah</HeroTitle>
            <SectionDescription className="mt-8">
              Platform pembuatan katalog produk online yang memungkinkan pelanggan memesan produkmu
              langsung melalui WhatsApp.
            </SectionDescription>
            <Fade delay={300}>
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4 mt-8">
                <button
                  className="text-left flex items-center space-x-4 border border-blue-500 bg-blue-500 px-6 py-3 rounded-md text-white justify-between"
                  onClick={() => router.push('/admin')}
                >
                  <span>Buat Menu Gratis</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  className="text-left flex items-center space-x-4 border text-blue-500 border-blue-500 px-6 py-3 rounded-md justify-between"
                  onClick={() => router.push('/cacastore')}
                >
                  <span>Lihat Demo</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </Fade>
          </div>
          <div className="md:w-1/2 md:py-12 pl-16 md:pl-32 relative hidden md:block">
            <div className="w-full">
              <Fade right>
                <img
                  src="/images/women-with-phone.jpeg"
                  alt=""
                  className="rounded-3xl w-full h-full object-cover transform"
                />
              </Fade>
            </div>
            <img
              src="/images/cacastore-screenshot.png"
              alt=""
              className="absolute top-0 left-0 w-32 md:w-48 mt-16 md:mt-32 transform shadow-2xl rounded-xl"
            />
          </div>
        </div>
      </DesktopLayout>
    </div>
  )
}

const Feature = () => {
  const FeatureItem = ({ title, description, icon }) => (
    <div className="p-4 rounded-md">
      <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">{icon}</div>
      <div className="mt-8">
        <Fade bottom>
          <p className="text-xl font-bold mb-2 font-lpTitle">{title}</p>
        </Fade>
        <Fade bottom delay={100}>
          <p className="text-gray-600">{description}</p>
        </Fade>
      </div>
    </div>
  )
  return (
    <div>
      <DesktopLayout className="py-12 md:py-24 mt-12 md:mt-24">
        <SectionTitle>Keuntungan yang kamu dapatkan</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-blue-500 bg-opacity-5 p-12 rounded-lg">
          <FeatureItem
            title="Lebih baik dari PDF"
            description="Waktu pemuatan lebih cepat, responsif dan dapat digunakan untuk melakukan pemesanan."
            icon={<AiOutlineFilePdf className="w-10 h-10 text-blue-500" />}
          />
          <FeatureItem
            title="Keuntungan penuh"
            description="Aplikasi lain meminta komisi 20% dari setiap transaksimu. Kami tidak."
            icon={<AiOutlineDollarCircle className="w-10 h-10 text-blue-500" />}
          />
          <FeatureItem
            title="Lebih aman"
            description="Ganti menu fisik di tokomu dengan QR Code untuk mengurangi kontak dengan pelanggan."
            icon={<AiOutlineQrcode className="w-10 h-10 text-blue-500" />}
          />
          <FeatureItem
            title="Untuk semua bisnis"
            description="Gunakan menukami untuk segala jenis produk yang kamu jual."
            icon={<AiOutlineShopping className="w-10 h-10 text-blue-500" />}
          />
          <FeatureItem
            title="Real-time"
            description="Lakukan perubahan menu dan dapat langsung diakses oleh pelanggan."
            icon={<AiOutlineFileDone className="w-10 h-10 text-blue-500" />}
          />
          <FeatureItem
            title="24/7 Support"
            description="Admin kami selalu online dan siap membantumu."
            icon={<AiOutlineCustomerService className="w-10 h-10 text-blue-500" />}
          />
        </div>
      </DesktopLayout>
    </div>
  )
}

const Pricing = () => {
  const router = useRouter()
  return (
    <div>
      <DesktopLayout className="py-12 md:pt-20 md:pb-24">
        <SectionTitle>Harga</SectionTitle>
        <Fade bottom delay={100}>
          <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl text-white">
            <div className="p-12 rounded-md">
              <div>
                <p className="font-bold text-gray-300 mb-8">Personal</p>
                <p className="text-4xl font-bold mb-8">Gratis</p>
                <p className="text-gray-300">
                  Nikmati akses penuh ke semua fitur MenuKami. Tanpa biaya langganan dan tanpa
                  komisi.
                </p>
              </div>
              <button
                className="w-full bg-blue-500 px-6 py-3 rounded-full text-white mt-32"
                onClick={() => router.push('/admin')}
              >
                <span>Coba Sekarang</span>
              </button>
            </div>
          </div>
        </Fade>
      </DesktopLayout>
    </div>
  )
}

const Steps = () => {
  const StepItem = ({ number, title, description }) => (
    <div className="p-4 rounded-md">
      <Fade bottom>
        <div className="mt-8 flex space-x-4">
          <div className="font-bold text-blue-500 rounded-md text-5xl">{number}</div>
          <div>
            <p className="text-xl font-bold mb-2 font-lpTitle relative">{title}</p>
            <Fade bottom delay={100}>
              <p className="text-gray-600 relative">{description}</p>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  )
  return (
    <DesktopLayout className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 md:py-24">
      <StepItem
        number={1}
        title="Daftarkan toko"
        description="Buat akun menukami dan daftarkan toko kamu."
      />
      <StepItem
        number={2}
        title="Unggah produk kamu"
        description="Unggah produk kamu beserta deskripsi dan harga."
      />
      <StepItem
        number={3}
        title="Mulai berjualan"
        description="Bagikan link kamu dan mulai terima pesanan."
      />
    </DesktopLayout>
  )
}

const AppInfo = () => {
  const InfoText = ({ title, description }) => (
    <div className="w-full md:w-2/5">
      <Fade bottom>
        <h2 className="text-3xl leading-tight font-bold tracking-tight font-lpTitle">{title}</h2>
      </Fade>
      <Fade bottom delay={100}>
        <SectionDescription className="mt-8">{description}</SectionDescription>
      </Fade>
    </div>
  )

  const InfoImage = ({ src, className }) => (
    <Fade delay={300}>
      <div className={`w-full md:w-3/5 ${className} flex items-center justify-center`}>
        <img src={src} alt="" className="rounded-3xl w-full h-full object-cover transform" />
      </div>
    </Fade>
  )

  const Info1 = () => (
    <div className="flex flex-col md:flex-row items-center space-x-4 space-y-8">
      <InfoImage src="/images/app-info/1.png" />
      <InfoText
        title="Buat menu toko kamu dengan mudah"
        description="Kamu hanya perlu tambahkan foto produk dan harga. Menu toko kamu pun sudah bisa diakses secara online."
      />
    </div>
  )
  const Info2 = () => (
    <div className="flex flex-col md:flex-row items-center space-x-4 space-y-8">
      <InfoImage src="/images/app-info/2.png" className="block md:hidden" />
      <InfoText
        title="Gunakan di mana saja"
        description="Bagikan link kamu yang sudah dibuat di Menukami ke semua sosial media yang kamu miliki, sehingga semakin banyak pelanggan yang akan melihat."
      />
      <InfoImage src="/images/app-info/2.png" className="hidden md:block" />
    </div>
  )

  const Info3 = () => (
    <div className="flex flex-col md:flex-row items-center space-x-4 space-y-8">
      <InfoImage src="/images/app-info/3.png" />
      <InfoText
        title="Permudah transaksi"
        description="Dengan katalog online dari Menukami, pelanggan dapat langsung menambahkan produk yang disuka kedalam keranjang dan melakukan checkout melalui Whatsapp."
      />
    </div>
  )

  return (
    <div>
      <DesktopLayout className="pt-12 md:pt-24">
        <Info1 />
      </DesktopLayout>
      <DesktopLayout className="pb-12 md:pb-24">
        <Info2 />
      </DesktopLayout>
      <DesktopLayout className="py-12 md:py-24">
        <Info3 />
      </DesktopLayout>
    </div>
  )
}

const Question = ({ text, answer, onClick, isShow }) => {
  return (
    <Fade bottom>
      <div>
        <div
          className="flex justify-between items-center border-b border-gray-200 py-4 cursor-pointer w-full"
          onClick={onClick}
        >
          <p className="font-lpTitle font-bold text-xl">{text}</p>
          {isShow ? (
            <AiOutlineMinus className="w-5 h-5 text-gray-800" />
          ) : (
            <AiOutlinePlus className="w-5 h-5 text-gray-800" />
          )}
        </div>
        {isShow ? <p className="py-4 text-gray-600">{answer}</p> : null}
      </div>
    </Fade>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: 'Apa itu menukami?',
      answer:
        'Menukami adalah platform pembuatan katalog produk online, yang dapat menerima pesanan langsung ke Whatsapp kamu',
    },
    {
      question: 'Bagaimana cara menggunakannya?',
      answer:
        'Kamu hanya perlu upload foto, harga dan detail produk kamu, dan bagikan link menu toko kamu.',
    },
    {
      question: 'Harganya berapa?',
      answer: 'Gratis. Kamu tidak perlu membayar biaya apapun.',
    },
    {
      question: 'Apakah memerlukan aplikasi tambahan?',
      answer:
        'Penjual ataupun pembeli tidak perlu menginstall aplikasi tambahan. Menukami dapat diakses melalui browser.',
    },
  ]

  const [show, setShow] = useState(0)

  return (
    <div>
      <DesktopLayout className="py-12 md:py-24">
        <SectionTitle>Pertanyaan Umum</SectionTitle>
        <div style={{ maxWidth: '800px' }} className="mx-auto">
          {faqs.map((item, index) => (
            <Question
              key={item.question}
              text={item.question}
              answer={item.answer}
              isShow={show === index}
              onClick={() => (show === index ? setShow(null) : setShow(index))}
            />
          ))}
        </div>
      </DesktopLayout>
    </div>
  )
}

export default function Home() {
  return (
    <div className="font-lpBody">
      <Head>
        <title>Menukami: Buat menu digital & terima pesanan via Whatsapp</title>
        <meta name="title" content="Menukami: Buat menu digital & terima pesanan via Whatsapp" />
        <meta
          name="description"
          content="Platform menu digital, mudah untuk disebarkan dan pelanggan dapat melakukan pesanan langsung yang akan dikirim via Whatsapp. Buat menu kamu sekarang!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://menukami.com/" />
        <meta
          property="og:title"
          content="Menukami: Buat menu digital & terima pesanan via Whatsapp"
        />
        <meta
          property="og:description"
          content="Platform menu digital, mudah untuk disebarkan dan pelanggan dapat melakukan pesanan langsung yang akan dikirim via Whatsapp. Buat menu kamu sekarang!"
        />
        <meta property="og:image" content="https://i.imgur.com/6eYbLz2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://menukami.com/" />
        <meta
          property="twitter:title"
          content="Menukami: Buat menu digital & terima pesanan via Whatsapp"
        />
        <meta
          property="twitter:description"
          content="Platform menu digital, mudah untuk disebarkan dan pelanggan dapat melakukan pesanan langsung yang akan dikirim via Whatsapp. Buat menu kamu sekarang!"
        />
        <meta property="twitter:image" content="https://i.imgur.com/6eYbLz2.png" />
      </Head>
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <div className="px-4 pb-64">
          <HomeHeader />
          <Hero />
          <Steps />
          <AppInfo />
          <Pricing />
          <Feature />
          <FAQ />
        </div>
        <HomeFooter />
      </div>
    </div>
  )
}
