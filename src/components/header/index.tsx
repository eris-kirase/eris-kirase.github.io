import { FunctionComponent } from 'react'
import { Navigation } from './navigation'
import { MyImage } from '../image'
import styles from './header.module.css'
import Link from 'next/link'

const Header: FunctionComponent = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link href="/" className={styles.topLogo}>
          <MyImage name="logoErisKirase2" alt="ErisLogo" height={35} width="auto" />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
