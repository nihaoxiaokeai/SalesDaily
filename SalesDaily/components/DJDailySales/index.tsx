import * as React from "react";
import GroupsTag from "../GroupsTag";
import TotalCard from "../TotalCard27.tsx";
import ListModule from "../ListModule";
interface IProps {
  data: any;
}

export default React.memo((props: IProps) => {
  // 表格整体数据
  const {
    baiHuoDaoJiaDataTypeList = [],
  } = props.data;
  return (
    <>
      <GroupsTag name="百货到家今日销售" />
      {baiHuoDaoJiaDataTypeList.map((item, index) => (
        <div key={index}>
          <ListModule
            dataList={item.baiHuoDaoJiaDetailList || []}
            titles={[item.dataType, "客单量", "销售金额(万)", "客单价"]}
          />
          <TotalCard data={[
            item.baiHuoDaoJiaDetailSum.dataTypeName,
            item.baiHuoDaoJiaDetailSum.returnPatr,
            item.baiHuoDaoJiaDetailSum.totalSale,
            item.baiHuoDaoJiaDetailSum.customSale
          ]} />
        </div>
      ))}
    </>
  );
});
