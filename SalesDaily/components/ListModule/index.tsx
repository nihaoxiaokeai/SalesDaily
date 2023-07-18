import * as React from "react";
import * as styles from "./index.scss";

interface IProps {
  dataList: any;
  titles: any;
}
export default React.memo((props: IProps) => {
  // 每个分组的详细列表
  const { dataList = [], titles = [] } = props;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <tr className={styles.tr}>
            <td className={styles.td1}>
              <span className={styles.tag}>{titles[0]}</span>
            </td>
            <td className={styles.td2}>{titles[1]}</td>
            <td className={styles.td3}>{titles[2]}</td>
            <td className={styles.td4}>{titles[3]}</td>
          </tr>
        </div>
        <div className={styles.content}>
          {dataList ? (
            dataList.map((item, index) => {
              return (
                <tr className={styles.tr1} key={index}>
                  <td className={styles.td1}>{item.dataTypeName}</td>
                  <td className={styles.td2}>{item.returnPatr}</td>
                  <td className={styles.td3}>{item.totalSale}</td>
                  <td className={styles.td4}>{item.customSale}</td>
                </tr>
              );
            })
          ) : (
              <tr className={styles.trNone}>无数据</tr>
            )}
        </div>
      </div>
    </>
  );
});
