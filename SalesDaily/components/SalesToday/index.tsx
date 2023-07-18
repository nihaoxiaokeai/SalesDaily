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
  const {
    appTodaySaleDataTypeList: contentList = [],
    appTodaySaleSum = {}
  } = props.data;
  const totalTitle = [
    appTodaySaleSum.dataTypeName,
    appTodaySaleSum.returnPatr,
    appTodaySaleSum.totalSale,
    appTodaySaleSum.customSale
  ];
  const titles = {
    0: ["按渠道", "客单量", "销售金额(万)", "客单价"],
    1: ["按商家类型", "客单量", "销售金额(万)", "客单价"],
  };
  return (
    <>
      <GroupsTag name={props.data.title} />
      <div>
        {contentList.map((item, index) => {
          return (
            <ListModule
              dataList={item.appTodaySaleDetailList}
              key={index}
              titles={titles[index]}
            />
          );
        })}
      </div>
      <TotalCard data={totalTitle} />
    </>
  );
});
