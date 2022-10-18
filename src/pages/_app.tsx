import '../styles/globals.scss'
import type { AppProps } from 'next/app'

// 起点になるapp.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
