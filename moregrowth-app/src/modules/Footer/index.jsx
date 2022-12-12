import React from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

function Footer() {
  return <div className={cx("footer")}>Hello :)</div>;
}

export default Footer;
