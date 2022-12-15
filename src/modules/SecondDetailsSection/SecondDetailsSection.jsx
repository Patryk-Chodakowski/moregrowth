import React from "react";
import classNames from "classnames/bind";

import mailIcon from "../../assets/mail.svg";

import styles from "./SecondDetailsSection.module.css";
import messages from "./SecondDetailsSection.message.js";

const renderTextSection = () => {
  return (
    <>
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
    </>
  )
}

function SecondDetailsSection() {
  return ( 
    <div className={styles.container}>
      <div className={styles.mobileIcon}>
        <img src={mailIcon} alt="Mail icon"/>
      </div>
      <div className={styles.textContainer}>
        {renderTextSection()}
      </div>
    </div>
  );
}

export default SecondDetailsSection;
