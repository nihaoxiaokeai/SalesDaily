import * as React from "react";
import * as styles from "./index.scss";
import GroupsTag from "../GroupsTag";
import ListModuleLeft from "./components/ListModuleLeft";
import ListModuleRight from "./components/ListModuleRight";
interface IProps {
  data: any;
}

export default React.memo((props: IProps) => {
  // 表格整体数据
  const { appSelfhelpSaleDetailList: contentList = [], appSelfhelpSaleSum = {} } = props.data;
  const totalTitle = [
    appSelfhelpSaleSum.dataTypeName,
    appSelfhelpSaleSum.customerCustNum,
    appSelfhelpSaleSum.mailVipNum,
    appSelfhelpSaleSum.customerRatio,
    appSelfhelpSaleSum.customerCustSale,
    appSelfhelpSaleSum.mailVipSale,
    appSelfhelpSaleSum.saleRatio,
  ];
  const titles = [
    "区域",
    "快速自助买单使用人数",
    "超市消费会员人数",
    "使用人数占比",
    "快速自助买单销售额（万）",
    "超市销售额（万）",
    "销售占比"
  ];
  return (
    <>
      <GroupsTag name={props.data.title} />
      <div className={styles.wrap}>
        <div>
          <div className={styles.leftContent}>
            <ListModuleLeft
              titles={titles}
              dataList={contentList}
              totalTitle={totalTitle}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <ListModuleRight
                titles={titles}
                dataList={contentList}
                totalTitle={totalTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
