import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";
import styles from "./table.module.css"
export default function Table({theadData, tbodyData}) {
  return (
    <table className={styles.table}>
        <caption>Code Snippets</caption>
        <thead className={styles.tablehead}>
            <tr>
                {theadData.map((h) => {
                    return <TableHeadItem key={h} item={h} />;
                })}
            </tr>
        </thead>
        <tbody>
            {tbodyData.map((data) => {
                return <TableRow key={data.slug} data={data.item} slug={data.slug}/>;
            })}
        </tbody>
    </table>
);
}
