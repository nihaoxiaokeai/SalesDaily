
import * as React from "react";
import * as styles from './index.scss';
// import img from 'assets/images/icon_tips_red.png';

interface IProps {
  name: string,
  click: any,
  visible: any,
}
export default React.memo((props: IProps) => {
  return (
    <div className={styles.tagWrap}>
      <div className={styles.tag}>{props.name}</div>
      <span className={styles.icon} onClick={props.click}>{props.visible ? (<img style={{ width: '28px' }} src={require('assets/images/icon_tips_red@2x.png')} />) : (<img style={{ width: '28px' }} src={require('assets/images/icon_tips@2x.png')} />)}</span>
    </div>
  )
})