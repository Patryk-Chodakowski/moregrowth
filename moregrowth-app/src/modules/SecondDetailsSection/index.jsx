import React from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

function SecondDetailsSection() {
  return <div className={cx("second-details-section")}>Hello :)</div>;
}

export default SecondDetailsSection;
