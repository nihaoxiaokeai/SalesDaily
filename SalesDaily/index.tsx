import * as React from "react";
import * as qs from "query-string";
import FirstCard from "./components/FirstCard";
import SalesToday from "./components/SalesToday";
import O2oIndex from "./components/O2oIndex";
import DeliveryHome from "./components/DeliveryHome";
import SelfHelpOrder from "./components/SelfHelpOrder";
import DJDailySales from "./components/DJDailySales";
import BroswerHistory from "@utils/history";
import * as api from "../../services/salesDaily";
import FontCard from "./components/FontCard";
import NoData from "../../components/NoData";
import * as styles from "./index.scss";

const { useState, useEffect } = React;
export default React.memo(() => {
  const [error, setError] = useState(null);
  const [OnlineRetailersData, setOnlineRetailersData] = useState(null);
  const [SalesTodayData, setSalesTodayData] = useState(null);
  const [O2oDatas, setO2oDatas] = useState(null);
  const [DeliveryHomeData, setDeliveryHomeData] = useState(null);
  const [SelfHelpOrederData, setSelfHelpOrederData] = useState(null);
  const [FontVisible, setFontVisible] = useState(false);
  const [DJDailySalesData, setDJDailySalesData] = useState(null);
  document.title = "天虹APP销售快报";
  useEffect(() => {
    // 获取msgid
    const params = qs.parse(window.location.search);
    const { msgid } = params;
    // const msgid = "e200adec-ed46-4b28-be0e-419295a50773";
    const p = Promise.race([
      // 获取电商物流情况监控
      api.getOnlineRetailers(msgid, true).then((res: any) => {
        if (res.code) {
          console.log(res.code);
        }
        const OnlineRetailersData = res;
        setOnlineRetailersData(OnlineRetailersData);
      }),

      api.getDJDailySalesData(msgid).then((res: any) => {
        setDJDailySalesData(res);
      }),

      // 获取天虹电商今日销售
      api.getSalesToday(msgid, true).then((res: any) => {
        const SalesTodayData = res;
        setSalesTodayData(SalesTodayData);
        document.title = res.pageTitle;
      }),

      // 获取o2o
      api.getAppO2Odatas(msgid, true).then((res: any) => {
        const O2oDatas = res;
        setO2oDatas(O2oDatas);
      }),

      // 天虹到家销售情况
      api.getDeliveryHome(msgid, true).then((res: any) => {
        const DeliveryHomeData = res;
        setDeliveryHomeData(DeliveryHomeData);
      }),

      // 快速自助买单
      api.getSelfHelpOreder(msgid, true).then((res: any) => {
        const SelfHelpOrederData = res;
        setSelfHelpOrederData(SelfHelpOrederData);
      }),
    ]);

    p.then((res) => {
      console.log(res);
    }).catch((err) => {
      setError(err.message);
    });
  }, []);
  const check = () => {
    if (FontVisible) {
      setFontVisible(false);
    } else {
      setFontVisible(true);
    }
  };
  return (
    <>
      {error ? (
        <NoData />
      ) : (
        <div className={styles.wrap}>
          <FirstCard
            data={OnlineRetailersData ? OnlineRetailersData : {}}
            click={check}
            visible={FontVisible}
          />
          {FontVisible && <FontCard />}
          {DJDailySalesData ? (
            <DJDailySales data={DJDailySalesData || {}} />
          ) : null}
          <SalesToday data={SalesTodayData ? SalesTodayData : {}} />
          <O2oIndex data={O2oDatas ? O2oDatas : {}} />
          <DeliveryHome data={DeliveryHomeData ? DeliveryHomeData : {}} />
          <SelfHelpOrder data={SelfHelpOrederData ? SelfHelpOrederData : {}} />
        </div>
      )}
    </>
  );
});
