import { Box, ThemeProvider } from '@mui/material'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { Theme } from '@/theme/theme'

const poppins = Poppins({
  subsets: ['devanagari', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider theme={Theme}>{children}</ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
