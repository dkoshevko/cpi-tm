import Taskbar from './components/Taskbar'
import './globals.scss'

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './fonts/pixeloid-font/PixeloidSans-mLxMm.ttf',
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={myFont.className}>
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        {children}
        <Taskbar />
      </body>
    </html>
  )
}
