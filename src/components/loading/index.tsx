'use client'
import { FunctionComponent, useEffect, useState } from 'react'
import styles from './loading.module.css'
import cx from '@/tools/cx'
import { MyImage } from '../image'

const Loading: FunctionComponent = () => {
  return (
    <div className={cx(styles.loading, !useDelay(2000) && styles.isActive)}>
      <MyImage className={styles.logo} name="logoErisKirase2" alt="ERIS" />
    </div>
  )
}

export default Loading

const useDelay = (sec: number): boolean => {
  const [waiting, setWaiting] = useState(true)
  useEffect(() => {
    setTimeout(() => setWaiting(false), sec)
  })
  return waiting
}
