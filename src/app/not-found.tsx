import { MyImage } from '@/components/image'
import { CSSProperties } from 'react'

export default function Custom404() {
  const containerStyles: CSSProperties = {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '128px 0',
  }
  const imageStyles: CSSProperties = {
    maxWidth: '500px',
    width: '80%',
  }
  return (
    <div style={containerStyles}>
      <h1>404のっとふぁうんど</h1>
      <p>見ようとしたページは存在しないよ！出直して！</p>
      <div style={imageStyles}>
        <MyImage name="perperEris" alt="床ペロヱリス" width={'100%'} />
      </div>
    </div>
  )
}
