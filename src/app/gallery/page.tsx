import { Metadata } from 'next'
import styles from './page.module.css'
import { CSSProperties } from 'react'
import { MyImage } from '@/components/image'

export const metadata: Metadata = {
  title: 'Gallery',
  description: '綺羅世ヱリスの画廊。ファンアートやご本人様作成のイラスト等を掲載しております。',
}

export default function Gallery() {
  const containerStyles: CSSProperties = {
    height: '85vh',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const imageStyles: CSSProperties = {
    marginTop: '32px',
    maxWidth: '500px',
    width: '80%',
  }
  return (
    <div style={containerStyles}>
      <h1>準備中です</h1>
      <p>ファンアートページになる予定だよ</p>
      <div style={imageStyles}>
        <MyImage name="perperEris" alt="床ペロヱリス" width={'100%'} />
      </div>
    </div>
  )
}
