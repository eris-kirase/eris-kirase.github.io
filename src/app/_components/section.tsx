'use client'
import { FunctionComponent, ReactNode } from 'react'
import styles from './section.module.css'
import { useInView } from 'react-intersection-observer'
import cx from '@/tools/cx'

interface TopSectionProps {
  title?: string
  titleRuby?: string
  children: ReactNode
}

export const SubSection: FunctionComponent<TopSectionProps> = ({ title, children, titleRuby }) => {
  const { ref, inView } = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  return (
    <section className={styles.container}>
      {title && (
        <span ref={ref} className={cx(styles.title, 'animate__animated', inView && `animate__fadeInUp`)}>
          <h2 className={styles.mainTitle}>{title}</h2>
          <h3 className={styles.ruby}>{titleRuby}</h3>
        </span>
      )}
      <div className={styles.contents}>{children}</div>
    </section>
  )
}
