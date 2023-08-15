import React from "react";
import { Button as MuiButton } from '@mui/material';
import Styles from './button.module.scss'

const Button = ({type, color, Icon}) => {
    return(
        <MuiButton variant={type} color={color} className={Styles.MuiButton}>
            <Icon/>
        </MuiButton>
    )
}

export default Button;
