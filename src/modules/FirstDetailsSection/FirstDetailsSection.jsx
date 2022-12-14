import React from "react";
import classNames from "classnames/bind";

import styles from "./FirstDetailsSection.module.css";
import messages from "./FirstDetailsSection.message.js";

const iconTitleWithDescriptionCard = (title, description) => {
  return (
    <div className={styles.cardContainer}>
      <img src="small_icon.svg" alt="Small icon"/>
      <h3 className={styles.cardHeader}>{title}</h3>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
}

function FirstDetailsSection() {
  return ( 
    <div className={styles.container}>
      <div className={styles.mobileIcon}>
        <img src="mobile.svg" alt="Mobile icon"/>
      </div>
      <div className={styles.textBox}>
        <div className={styles.header}>
          {messages.sectionTitle}
        </div>
        <div className={styles.text}>
          {messages.sectionDescription}
          <br/><br/>
          {messages.sectionDescriptionSecond}
        </div>
        <div className={styles.cardGroup}>
          {iconTitleWithDescriptionCard(messages.cardTitle, messages.cardDescription)}
          {iconTitleWithDescriptionCard(messages.cardTitle, messages.cardDescription)}
        </div>
      </div>
    </div>
  );
}

export default FirstDetailsSection;
