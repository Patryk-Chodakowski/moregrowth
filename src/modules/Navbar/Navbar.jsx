import React from "react";
import classNames from "classnames/bind";
import Button from "../../common/Button/Button";
import NavigationPanel from "../../common/NavigationPanel/NavigationPanel";

import styles from "./Navbar.module.css";
import messages from "./Navbar.message";

function Navbar() {
  return (
  <div className={styles.navbar}>
    <div className={styles.container}>
      <NavigationPanel/>
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
