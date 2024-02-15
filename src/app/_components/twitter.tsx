'use client'
import { FunctionComponent } from 'react'
import { SubSection } from './section'
import styles from './twitter.module.css'
import { useInView } from 'react-intersection-observer'
import cx from '@/tools/cx'
import { getFading } from '@/styles/getAnimation'

export const TwitterSection: FunctionComponent = () => {
  const timeLine = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const followLink = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  return (
    <SubSection title="TWITTER">
      <div className={styles.container}>
        <div ref={timeLine.ref} className={cx(styles.twitterTimeline, getFading(timeLine.inView, 'fadeInUp'))}>
          <a className="twitter-timeline" data-height="600" data-theme="dark" href="https://twitter.com/Ellie_doll__" data-tweet-limit="5" data-dnt="true">
            Tweets by @Ellie_doll__
          </a>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
        <a ref={followLink.ref} className={cx(styles.followLink, getFading(followLink.inView, 'fadeInUp'))} href="https://x.com/Ellie_doll__" target="_blank">
          X（旧Twitter）をフォロー
        </a>
      </div>
    </SubSection>
  )
}
