import localFont from 'next/font/local'
import "../styles/globals.css"

const myFont = localFont({ src: '../assets/fonts/IRANSans-Medium-web.ttf' })


export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
        <Component {...pageProps} />
    </main>
  )
}