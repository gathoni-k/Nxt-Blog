import styles from "./table.module.css"
import Link from "next/link"
export default function TableRow({ data, slug }) {
    return (
        <tr className={styles.tablerow}>
            {data.map((item) => {
                // Adds a link to the first item 
                if(item === slug) {
                    return <td className={styles.tablerowitem} key={item}>
                        <Link href={`snippets/${slug}`}>
                        <a className={styles.snippetlink}>{item}</a>
                        </Link>
                    </td>;
                }
                return <td className={styles.tablerowitem} key={item}>{item}</td>;
            })}
        </tr>
    );
};

