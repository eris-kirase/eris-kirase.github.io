import { FunctionComponent } from 'react'
import { ABOUT_LINK, LinkInfo, SNS_LIST, SUPPORT_LINK } from '@/context/links'
import styles from './links.module.css'
import Link from 'next/link'

export const FooterLinks: FunctionComponent = () => {
  const snsList = Object.values(SNS_LIST)
    .map((sns) => {
      if (sns.url !== '') {
        return sns
      }
    })
    .filter((item): item is Exclude<typeof item, undefined> => item !== undefined)
  return (
    <div className={styles.sections}>
      <LinkSection title="SNS" links={snsList} />
      <LinkSection title="SUPPORT" links={SUPPORT_LINK} />
      <LinkSection title="ABOUT" links={ABOUT_LINK} />
    </div>
  )
}

const LinkSection: FunctionComponent<{ title: string; links: LinkInfo[] }> = ({ title, links }) => {
  if (links.length === 0) {
    return
  }
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.content}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.url} target="_blank">
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
