import { ThemeProvider } from '@mui/material'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { theme } from '@/theme/theme'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
