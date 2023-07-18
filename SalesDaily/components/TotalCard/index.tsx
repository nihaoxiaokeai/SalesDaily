import * as React from "react";
import * as styles from "./index.scss";

interface IProps {
  data: any;
}

export default React.memo((props: IProps) => {
  const data = props.data;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <tr className={styles.tr}>
            <td className={styles.td1}>{data[0]}</td>
            <td className={styles.td2}>{data[1]}</td>
            <td className={styles.td2}>{data[2]}</td>
            <td className={styles.td2}>{data[3]}</td>
            <td className={styles.td2}>{data[4]}</td>
          </tr>
        </div>
      </div>
    </>
  );
});
