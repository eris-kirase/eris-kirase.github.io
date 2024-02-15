import { FunctionComponent } from 'react'
import { FooterLinks } from './links'
import styles from './footer.module.css'

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.base}>
      <FooterLinks />
      <p className={styles.copyright}>Ⓒ2024 Amor Sachimai</p>
    </footer>
  )
}

export default Footer
