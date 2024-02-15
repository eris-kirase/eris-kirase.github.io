import { FunctionComponent } from 'react'
import styles from './hamburger-menu.module.css'
import { MyImage } from '@/components/image'
import Link from 'next/link'

export const HamburgerMenu: FunctionComponent = () => {
  return (
    <div className="container">
      <input type="checkbox" className={styles.menuBtn} id="menu-btn" />
      <label htmlFor="menu-btn" className={styles.menuIcon}>
        <span className={styles.navicon}></span>
      </label>
      <div className={styles.menu}>
        {/* ChildNode */}
        <div className={styles.content}>
          <MyImage name="logoErisKirase" alt="logo" className={styles.logo} />
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link href="/">Top</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="https://web.iriam.app/s/user/tTmcKX" target="_blank">
                IRIAM
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="https://twitter.com/Ellie_doll__" target="_blank">
                X
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link href="https://www.youtube.com/@Kirase_Eris" target="_blank">
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
