import React from "react";
import classNames from "classnames/bind";
import Button from "../../common/Button/Button";

import styles from "./Footer.module.css";
import messages from "./Footer.message";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <div className={styles.company}>
            {messages.company}
          </div>
          <div className={styles.logo}>
            {messages.brand}
          </div>
          <div className={styles.buyButtonContainer}>
            <Button className={styles.buyButton}>{messages.buyButton}</Button>
          </div>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.navigationTabs}>
            <div className={styles.tab}>{messages.home}</div>
            <div className={styles.tab}>{messages.about}</div>
            <div className={styles.tab}>{messages.contact}</div>
          </div>
          <div className={styles.socialsLinks}>
            <div><img src="facebook.svg" alt="facebook"/></div>
            <div><img src="linkedin.svg" alt="linkedin"/></div>
            <div><img src="twitter.svg" alt="twitter"/></div>
            <div><img src="youtube.svg" alt="youtube"/></div>
            <div><img src="instagram.svg" alt="instagram"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
