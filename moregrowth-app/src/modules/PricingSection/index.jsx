import React from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

function PricingSection() {
  return <div className={cx("pricing-section")}>Hello :)</div>;
}

export default PricingSection;
