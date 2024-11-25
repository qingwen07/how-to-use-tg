import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import 'nextra-theme-docs/style.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Add any app-wide side effects here
  }, [])

  return <Component {...pageProps} />
}
