import styles from "./table.module.css"
export default function TableHeadItem({ item }) {
    return (
        <td title={item} className={styles.tableheaditem}>
            {item}
        </td>
    );
};