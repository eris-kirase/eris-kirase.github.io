import { Fragment, FunctionComponent } from 'react'
import { Icon } from '../icon'
import { SNS_LIST } from '@/context/links'
import styles from './navigation.module.css'
import cx from '@/tools/cx'
import { ViewInDesktop, ViewInMobide } from '../media'
import { HamburgerMenu } from './components/hamburger-menu'
import Link from 'next/link'

export const Navigation: FunctionComponent = () => {
  return (
    <Fragment>
      <ViewInDesktop>
        <DesktopNav />
      </ViewInDesktop>
      <ViewInMobide>
        <MobileNav />
      </ViewInMobide>
    </Fragment>
  )
}

const DesktopNav: FunctionComponent = () => {
  const snsList = SNS_LIST
  return (
    <nav className={cx(styles.nav)}>
      <ul className={styles.container}>
        <li>
          <Link className={styles.icon} href="/gallery">
            <span className={styles.title}>Gallery</span>
          </Link>
        </li>
        <li>
          <Link className={styles.icon} href={snsList.iriam.url} target="_blank">
            <span className={styles.title}>{snsList.iriam.name}</span>
          </Link>
        </li>
        <li>
          <Link className={styles.icon} href={snsList.x.url} target="_blank">
            <Icon name="x" color="white" height="25px" />
          </Link>
        </li>
        <li>
          <Link className={styles.icon} href={snsList.youtube.url} target="_blank">
            <Icon name="youtube" color="white" height="25px" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const MobileNav: FunctionComponent = () => {
  return (
    <nav className={cx(styles.nav)}>
      <HamburgerMenu />
    </nav>
  )
}
