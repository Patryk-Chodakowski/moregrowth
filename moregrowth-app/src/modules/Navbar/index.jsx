import React from "react";
import classNames from "classnames/bind";

import styles from "./index.scss";

const cx = classNames.bind(styles);

function Navbar() {
  return <div className={cx("navbar")}>Hello :)</div>;
}

export default Navbar;
