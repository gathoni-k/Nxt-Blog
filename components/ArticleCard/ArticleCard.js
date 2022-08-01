import Link from "next/link";
import styles from "./articlecard.module.css"
export default function ArticleCard({title, description, link, category}) {
  return (
    <div className={styles.container}>
      <div className={styles.category}>React</div>
      <Link href={link} passHref>
        <a className={styles.title}>{title}</a>
      </Link>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
