import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Styles from './section1.module.scss';
import Stack from '@mui/material/Stack';
import ButtonIconText from '../../../Button/ButtonIconText';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';



const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
}));

export default function RowAndColumnSpacing() {
    return (
        <Box className={Styles.BoxContainer}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} className={Styles.Content}>
                    <Stack spacing={3} className={Styles.TextContent}>
                        <Item sx={{fontSize:'74px'}}>Collections</Item>
                        <Item sx={{fontSize:'30px'}}>you can explore ans shop many differnt collection from various barands here.</Item>
                        <Item>
                            <ButtonIconText variant='Contained' text='Shop Now' Icon={ShoppingBagRoundedIcon}/>
                        </Item>
                    </Stack>
                </Grid>
                <Grid item xs={3} className={Styles.ImgProduct}>
                    <Item className={Styles.rectengle}>

                        <img src="Images/19.jpg" alt="Your image" sx={{ borderRadius: '160px, 0px, 160px, 0px' }} />
                    </Item>
                </Grid>


            </Grid>
        </Box>
    );
}
