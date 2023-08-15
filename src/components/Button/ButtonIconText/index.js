import React from "react";
import { Button as MuiButton } from '@mui/material';

const Button = ({type, text, Icon}) => {
    return(
        <MuiButton variant={type}  sx={{color:'white', backgroundColor:'black', borderRadius:'10px'}}>
            <Icon/>
            {text}
        </MuiButton>
    )
}

export default Button;
