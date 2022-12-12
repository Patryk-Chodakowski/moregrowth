import React from "react";
import styles from "./LandingPage.module.css";
import classNames from 'classnames';
// import heroLogo from '../../../public/';
import {ReactComponent as HeroLogo} from '../../assets/Hero.svg';
// import heroLogo from './././public/Hero.svg';
// import hero from "././public/Hero.svg";

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <div className={styles.header}>
          Introduce Your Product<br/>Quickly & Effectively
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          <br/><br/>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </div>
        <div className={styles.buttonGroup}>
          <button className={classNames(styles.button, styles.purchaseButton)}>Purchase UI Kit</button>
          <button className={classNames(styles.button, styles.learnButton)}>Learn More</button>
        </div>
      </div>
      <div className={styles.hero}><HeroLogo/></div>
    </div>
  );
}

export default LandingPage;
