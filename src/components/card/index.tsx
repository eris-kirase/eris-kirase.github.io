import { FunctionComponent } from 'react'
import styles from './articleCard.module.css'

interface ArticleCardProps {
  url: string
  imgSrc: string
  title: string
  content?: string
}
export const ArticleCard: FunctionComponent<ArticleCardProps> = ({ url, imgSrc, title, content }) => {
  return (
    <article className={styles.article}>
      <a href={url} target="_blank">
        <figure className={styles.imageContainer}>
          <img src={imgSrc} alt={title} className={styles.image} loading="lazy" />
        </figure>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </header>
        {content && (
          <div className={styles.content}>
            <p>{content}</p>
          </div>
        )}
      </a>
    </article>
  )
}
