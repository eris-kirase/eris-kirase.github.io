'use client'
import { CSSProperties, FunctionComponent } from 'react'
import { SubSection } from './section'
import styles from './contact.module.css'
import { useInView } from 'react-intersection-observer'
import cx from '@/tools/cx'
import { getFading } from '@/styles/getAnimation'
import { getImageUrl } from '@/components/image'

export const Contact: FunctionComponent = () => {
  const comment = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const customStyles: CSSProperties = {
    backgroundImage: `URL(${getImageUrl('tanabataEris')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(0,0,0,0.5);',
    backgroundBlendMode: 'darken',
    backgroundPosition: '90% 10%',
    paddingBottom: '64px',
  }
  return (
    <SubSection title="CONTACT" option={{ customStyles: customStyles }}>
      <div ref={comment.ref} className={cx(styles.container, getFading(comment.inView, 'fadeInUp'))}>
        <p>
          当サイトは、cozopro所属Vライバー 綺羅世ヱリスさんを応援する非公式サイトです。
          <br />
          株式会社cozoru様、およびcozoproとは⼀切関係ありません。
          <br />
          当サイトで使⽤している画像の著作権・肖像権等は各権利者に帰属いたします。
        </p>
        <a className={styles.followLink} href="https://twitter.com/sachimai_amor" target="_blank">
          このサイトへのお問い合わせは管理人DMまで
        </a>
      </div>
    </SubSection>
  )
}
