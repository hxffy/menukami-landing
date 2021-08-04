// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from 'next-sitemap'
import { supabase } from 'utils/supabaseClient'

export const getServerSideProps = async (ctx) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://menukami.com',
  }[process.env.NODE_ENV]
  const { data } = await supabase.from('outlets').select('*')

  const fields = [
    {
      loc: baseUrl, // Absolute url
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '1.0',
    },
    ...data.map(({ slug, updated_at }) => ({
      loc: `${baseUrl}/${slug}`, // Absolute url
      lastmod: new Date(updated_at).toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
    })),
  ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}
