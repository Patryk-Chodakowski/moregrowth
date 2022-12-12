import React from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

function FirstDetailsSection() {
  return <div className={cx("first-details-section")}>Hello :)</div>;
}

export default FirstDetailsSection;
