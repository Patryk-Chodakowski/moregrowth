import React from "react";
import classNames from 'classnames';
import styles from "./Button.module.css";

function Button(props) {
    const {children, className} = props
    return (
        <button className={classNames(styles.button, className)}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    className: ""
}

export default Button;