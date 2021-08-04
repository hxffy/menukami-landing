import { UserProvider } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'react-quill/dist/quill.snow.css'
import '../styles/custom.css'
import '../styles/tailwind.css'
import '../styles/unreset.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          {isProduction && (
            <>
              <script
                async
                src={
                  'https://www.googletagmanager.com/gtag/js?id=' +
                  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
                }
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `,
                }}
              />
            </>
          )}
        </Head>
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  )
}

export default MyApp
