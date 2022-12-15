import React from "react";

import mobileIcon from "../../assets/mobile.svg";
import smallIcon from "../../assets/small_icon.svg";

import styles from "./FirstDetailsSection.module.css";
import messages from "./FirstDetailsSection.message.js";

const iconTitleWithDescriptionCard = (title, description) => {
  return (
    <div className={styles.cardContainer}>
      <img src={smallIcon} alt="Small icon"/>
      <h3 className={styles.cardHeader}>{title}</h3>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
}

const renderTextSection = () => {
  return (
    <>
      <div className={styles.header}>
        {messages.sectionTitle}
      </div>
      <div className={styles.text}>
        {messages.sectionDescription}
        <br/><br/>
        {messages.sectionDescriptionSecond}
      </div>
    </>
  );
}

function FirstDetailsSection() {
  return ( 
    <div className={styles.container}>
      <div className={styles.mobileIcon}>
        <img src={mobileIcon} alt="Mobile icon"/>
      </div>
      <div className={styles.textBox}>
        {renderTextSection()}
        <div className={styles.cardGroup}>
          {iconTitleWithDescriptionCard(messages.cardTitle, messages.cardDescription)}
          {iconTitleWithDescriptionCard(messages.cardTitle, messages.cardDescription)}
        </div>
      </div>
    </div>
  );
}

export default FirstDetailsSection;
