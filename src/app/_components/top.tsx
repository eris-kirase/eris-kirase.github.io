'use client'
import { FunctionComponent } from 'react'
import styles from './top.module.css'
import { MyImage } from '@/components/image'
import cx from '@/tools/cx'
import { useDelay } from '@/hooks/delay'

export const TopSection: FunctionComponent = () => {
  return (
    <section className={styles.contents}>
      <MyImage name="knight_eris" alt="騎士ヱリス" className={styles.sectionBack} />
      <MyImage name="anniversaryLogo" alt="2周年ロゴ" className={cx(styles.anniversaryLogo, !useDelay(3500) && styles.anniversaryLogoAnimation)} />
    </section>
  )
}
