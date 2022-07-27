import Link from "next/link";
import styles from "./articlecard.module.css"
export default function ArticleCard({title, description, link}) {
  return (
    <div className={styles.container}>
      <Link href={link} passHref>
        <a className={styles.title}>{title}</a>
      </Link>
      <div className={styles.description}>{description}</div>
      <Link href={link} passHref>
      <a
        className={styles.readmore}>Read more {`>>`}
     </a>
    </Link>
     

    </div>
  )
}
