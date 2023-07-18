import * as React from "react";
import * as styles from "./index.scss";
import GroupsTag from "../GroupsTag";
import TotalCard from "../TotalCard27.tsx";
import ListModule from "../ListModule";
interface IProps {
  data: any;
}

export default React.memo((props: IProps) => {
  // 表格整体数据
  const { appO2ODetailList: contentList = [], appO2OSum = {} } = props.data;
  const totalTitle = [
    appO2OSum.dataTypeName,
    appO2OSum.returnPatr,
    appO2OSum.totalSale,
    appO2OSum.customSale
  ];
  const titles = ["按渠道", "客单量", "销售金额(万)", "客单价"];
  return (
    <>
      <GroupsTag name={props.data.title} />
      <div>
        <ListModule dataList={contentList} titles={titles} />
      </div>
      <TotalCard data={totalTitle} />
    </>
  );
});
