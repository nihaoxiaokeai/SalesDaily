import * as React from "react";
import * as styles from "./index.scss";

export default React.memo(() => {
  return (
    <>
      <div className={styles.wrap}>
        <p>1、发货预警：付款后（海淘3天、其他商家类型1天）仍未发货单数。</p>
        <p>2、延迟发货：付款后（海淘5天，其他商家类型2天）仍未发货单数。</p>
        <p>
          3、未及时妥投：发货（海淘报税区和香港直邮10天、海外直邮20天、普通BBC和轻度深度数字化专柜5天，天虹自营深圳区2天、外区5天）后还没收到货单数。
        </p>
        <p>
          4、发货预警和延迟发货均剔除客服备注中含有预售、定制和指定发货的订单，轻度数字化因目前导购未能备注，故先剔除商品名称有预售字样的订单。
        </p>
        <p>5、24h未审核：未在24小时内审核的未完结逆向单。</p>
        <p>
          6、妥投数据：剔除物流商是“其他”“无需快递”和“考拉国际速递”的正向订单。
        </p>
      </div>
    </>
  );
});