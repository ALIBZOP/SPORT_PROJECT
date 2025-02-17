import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body dir="rtl" className='MyCustomFont'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}