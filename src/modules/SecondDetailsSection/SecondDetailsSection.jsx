import React from "react";
import classNames from "classnames/bind";

import styles from "./SecondDetailsSection.module.css";
import messages from "./SecondDetailsSection.message.js";

function SecondDetailsSection() {
  return ( 
    <div className={styles.container}>
      <div className={styles.mobileIcon}>
        <img src="mail.svg" alt="Mail icon"/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <div className={styles.header}>
            {messages.sectionTitle}
          </div>
          <div className={styles.text}>
            {messages.sectionDescription}
            <br/><br/>
            {messages.sectionDescriptionSecond}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondDetailsSection;
