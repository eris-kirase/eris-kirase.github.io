import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import 'animate.css' // see: https://animate.style/
import { getImageUrl } from '@/components/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s - 綺羅世ヱリス非公式ファンサイト',
    default: '綺羅世ヱリス非公式ファンサイト',
  },
  description: 'Vライバー綺羅世ヱリスさんのデビュー2周年記念非公式特設サイトです。',
  keywords: ['綺羅世ヱリス', 'eris', 'kirase', 'Vliver'],
  twitter: { card: 'summary_large_image' },
  robots: { index: false, follow: false }, // ToDo: 著作物の利用確認後Trueへ
  openGraph: {
    type: 'website',
    url: 'https://amorsachimai.github.io/eris-kirase/',
    images: [
      {
        url: 'https://amorsachimai.github.io' + getImageUrl('ogpimg'),
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}