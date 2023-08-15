import React from "react";
import { Button as MuiButton } from '@mui/material';
import styles from "./button.module.scss"
const Button = ({ size = "small", type, children, startIcon, endIcon, style = {}, className }) => {
    return (
        <MuiButton
            variant={type}
            className={styles.container + ` ${className}`}
            sx={{
                color: 'black',
                backgroundColor: 'transparent',
                borderRadius: '10px',
                ...style
            }}
            disableElevation
            startIcon={startIcon}
            endIcon={endIcon}
            size={size}
        >
            {children}
        </MuiButton>
    )
}

export default Button;
