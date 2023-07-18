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
  const { appDaoJiaSaleDetailList: contentList = [], appDaoJiaSaleSum = {} } = props.data;
  const totalTitle = [
    appDaoJiaSaleSum.dataTypeName,
    appDaoJiaSaleSum.daoJiaSale,
    appDaoJiaSaleSum.daoJiaSaleLastWeekRatio,
    appDaoJiaSaleSum.mailSale,
    appDaoJiaSaleSum.mailSaleRatio,
    appDaoJiaSaleSum.daoJiaReturnPatr,
    appDaoJiaSaleSum.mailSaleReturnPatr,
    appDaoJiaSaleSum.mailSaleReturnPatrRatio
  ];
  const titles = [
    "区域",
    "天虹到家销售额（万）",
    "与上周同星期比",
    "超市销售额（万）",
    "超市销售比",
    "天虹到家客单量",
    "超市客单量",
    "占超市客单比"
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
