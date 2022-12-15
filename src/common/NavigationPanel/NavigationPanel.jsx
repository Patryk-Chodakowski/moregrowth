import React from "react";
import classNames from 'classnames';
import styles from "./NavigationPanel.module.css";
import messages from "./NavigationPanel.message";

function NavigationPanel(props) {
    const { className } = props;
    return (
        <div className={classNames(styles.navigationTabs, className)}>
            <div className={styles.tab}>{messages.home}</div>
            <div className={styles.tab}>{messages.about}</div>
            <div className={styles.tab}>{messages.contact}</div>
        </div>
    );
}

NavigationPanel.defaultProps = {
    className: ""
}

export default NavigationPanel;