import React from "react";
import classNames from "classnames/bind";
import Button from "../../common/Button/Button";
import {ReactComponent as PriceBackground} from '../../assets/price.svg';

import styles from "./PricingSection.module.css";
import messages from "./PricingSection.message.js";

const renderTextSection = () => {
  return (
    <div className={styles.textBox}>
      <div className={styles.header}>
        {messages.sectionTitle}
      </div>
      <div className={styles.text}>
        {messages.sectionDescription}
      </div>
    </div>
  );
}

const renderPriceSection = () => {
  return (
    <div className={styles.priceSection}>
      <div className={styles.price}>
        {messages.price}
      </div>
      <div className={styles.product}>
        {messages.product}
      </div>
    </div>
  );
}

const renderConfirmationSection = () => {
  return (
    <div className={styles.confirmSection}>
      <div className={styles.confirmDescription}>
        {messages.confirmDescription}
      </div>
      <div>
        <Button className={styles.confirmButton}>{messages.confirmButton}</Button>
      </div>
    </div>
  );
}

function PricingSection() {
  return ( 
    <div className={styles.container}>
      <div className={styles.background}>
        <PriceBackground/>
      </div>
      <div className={styles.textContainer}>
        {renderTextSection()}
        {renderPriceSection()}
        {renderConfirmationSection()}
      </div>
    </div>
  );
}

export default PricingSection;
