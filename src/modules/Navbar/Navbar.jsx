import React from "react";
import classNames from "classnames/bind";
import Button from "../../common/Button/Button";

import styles from "./Navbar.module.css";
import messages from "./Navbar.message";

function Navbar() {
  return (
  <div className={styles.navbar}>
    <div className={styles.container}>
      <div className={styles.navigationTabs}>
        <div className={styles.tab}>{messages.home}</div>
        <div className={styles.tab}>{messages.about}</div>
        <div className={styles.tab}>{messages.contact}</div>
      </div>
      <div className={styles.logo}>
        {messages.brand}
      </div>
      <div className={styles.buyButtonContainer}>
        <Button className={styles.buyButton}>{messages.buyButton}</Button>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
