import React from "react";
import Button from "../../common/Button/Button";
import NavigationPanel from "../../common/NavigationPanel/NavigationPanel";

import facebookIcon from "../../assets/facebook.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import instagramIcon from "../../assets/instagram.svg";

import styles from "./Footer.module.css";
import messages from "./Footer.message";

const renderTopPanel = () => {
  return (
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
  );
}

const renderSocialLinks = () => {
  return (
    <div className={styles.socialsLinks}>
      <div><img src={facebookIcon} alt="facebook"/></div>
      <div><img src={linkedinIcon} alt="linkedin"/></div>
      <div><img src={twitterIcon} alt="twitter"/></div>
      <div><img src={youtubeIcon} alt="youtube"/></div>
      <div><img src={instagramIcon} alt="instagram"/></div>
    </div>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {renderTopPanel()}
        <div className={styles.bottomBox}>
          <NavigationPanel className={styles.navigationTabs}/>
          {renderSocialLinks()}
        </div>
      </div>
    </div>
  );
}

export default Footer;
