import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono } from '@next/font/google'

const RobotoMono = Roboto_Mono({
  weight: '100'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${RobotoMono.style.fontFamily};
        }
      `}</style>
      <Component className={RobotoMono.className} {...pageProps} />
    </>
  )
}

export default MyApp
