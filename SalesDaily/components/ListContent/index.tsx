import * as React from "react";
import * as styles from "./index.scss";

interface IProps {
  datas: any;
}
export default React.memo((props: IProps) => {
  // fLogisticsReportDetailList 分组后的详细列表
  const { datas = {} } = props;
  const { appDeliveryDelayDeptDetailList = [], deptName = "" } = datas;
  const rowSpan = appDeliveryDelayDeptDetailList.length || 1;
  return (
    <>
      {appDeliveryDelayDeptDetailList.map((item, index) => {
        let element;
        if (index === 0) {
          element = (
            <>
              <tr className={styles.tr1} key={index}>
                <td className={styles.td1} rowSpan={rowSpan}>
                  <span className={styles.tag}>{deptName}</span>
                </td>
                <td className={styles.td3}>&nbsp;{item.merchantTypeName}</td>
                <td className={styles.td2}>{item.outDelayWarnning}</td>
                <td className={styles.td2}>{item.outDelay}</td>
                <td className={styles.td2}>{item.deliveryDelay}</td>
                <td className={styles.td2}>{item.twentyFourHoursUnchecked}</td>
              </tr>
            </>
          );
        } else {
          element = (
            <>
              <tr className={`${styles.tr1} ${styles.borderNone}`} key={index}>
                <td className={styles.td1}>
                  {/* <span className={styles.tag}>{deptName}</span> */}
                </td>
                <td className={`${styles.td3} ${styles.borderTop}`}>
                  &nbsp;{item.merchantTypeName}
                </td>
                <td className={`${styles.td2} ${styles.borderTop}`}>
                  {item.outDelayWarnning}
                </td>
                <td className={`${styles.td2} ${styles.borderTop}`}>
                  {item.outDelay}
                </td>
                <td className={`${styles.td2} ${styles.borderTop}`}>
                  {item.deliveryDelay}
                </td>
                <td className={`${styles.td2} ${styles.borderTop}`}>
                  {item.twentyFourHoursUnchecked}
                </td>
              </tr>
            </>
          );
        }
        return element;
      })}
    </>
  );
});
