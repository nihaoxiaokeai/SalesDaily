import * as React from "react";
import * as styles from "./index.scss";
import GroupsTag from "./components/GroupsTag";
import ListContent from "../ListContent";
import TotalCard from "../TotalCard";
interface IProps {
  data: any;
  click: any;
  visible: any;
}

export default React.memo((props: IProps) => {
  const {
    appDeliveryDelayDeptList: contentList = [],
    appDeliveryDelaySum = {}
  } = props.data;
  const totalTitle = [
    appDeliveryDelaySum.merchantTypeName,
    appDeliveryDelaySum.outDelayWarnning,
    appDeliveryDelaySum.outDelay,
    appDeliveryDelaySum.deliveryDelay,
    appDeliveryDelaySum.twentyFourHoursUnchecked
  ];
  return (
    <>
      <GroupsTag
        name={props.data.title}
        click={props.click}
        visible={props.visible}
      />
      <div className={styles.wrap}>
        <div className={styles.title}>
          <tr className={styles.tr}>
            <td className={styles.td1}>
              <div className={styles.titleLabel}>商家类型</div>
            </td>
            <td className={styles.td2}>
              发货预警
              <div className={styles.titleTag}>(发货)</div>
            </td>
            <td className={styles.td2}>
              延迟发货
              <div className={styles.titleTag}>(发货)</div>
            </td>
            <td className={styles.td2}>
              未及时<br />妥投
              <div className={styles.titleTag}>(发货)</div>
            </td>
            <td className={styles.td2}>
              24小时<br />未审核
              <div className={styles.titleTag}>(逆向单)</div>
            </td>
          </tr>
        </div>
        <div className={styles.content}>
          <table cellSpacing={0} cellPadding={0} className={styles.table}>
            {contentList.map((item, index) => {
              return <ListContent datas={item} key={index} />;
            })}
          </table>
        </div>
      </div>
      <TotalCard data={totalTitle} />
    </>
  );
});
