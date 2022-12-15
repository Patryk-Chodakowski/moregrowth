import React from "react";
import Button from "../../common/Button/Button";
import {ReactComponent as HeroLogo} from '../../assets/Hero.svg';

import styles from "./LandingPage.module.css";
import messages from "./LandingPage.message";

function renderHeader() {
  return (
    <div className={styles.header}>
      {messages.header}
      <br/>
      {messages.headerPart2}
    </div>
  );
}

function renderDescription() {
  return (
    <div className={styles.text}>
      {messages.description}
      <br/><br/>
      {messages.descriptionPart2}
    </div>
  );
}

function renderButtonGroup() {
  return (
    <div className={styles.buttonGroup}>
      <Button>{messages.purchaseButton}</Button>
      <Button className={styles.learnButton}>{messages.learnButton}</Button>
    </div>
  );
}

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        {renderHeader()}
        {renderDescription()}
        {renderButtonGroup()}
      </div>
      <div className={styles.hero}>
        <HeroLogo/>
      </div>
    </div>
  );
}

export default LandingPage;
