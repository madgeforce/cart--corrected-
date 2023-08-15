import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Styles from './navbare.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import ButtonIcon from '../Button/ButtonIcons';
import { Button } from '@mui/material';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'rgba(30, 40, 50, 0.05)',
   
  }));
export default function DirectionStack() {
    return (
        <div className={Styles.Container}>
            <Stack direction="row" spacing={2} className={Styles.StackContainer}>
        
                <ButtonIcon color="inherit" type={'contained'} Icon={SearchIcon} className={Styles.Button} />
           
                <Item className={Styles.CoralContainer}> CORAL</Item>
            <div className={Styles.ButtonsContainer}>
                <Item >
                    <ButtonIcon color="inherit" type={'contained'} Icon={PersonRoundedIcon} className={Styles.ButtonAccout} />
                  <Button className={Styles.Text}>  Account</Button>
                    </Item>

                <Item  className={Styles.ButtonsContainer}>
                <ButtonIcon color="inherit" type={'contained'} Icon={ShoppingBagRoundedIcon} className={Styles.ButtonShopping} />
                <Button className={Styles.Text}>  Shopping</Button>
                </Item>
                </div>
            </Stack>


            <Tabs aria-label="Disabled tabs" defaultValue={0} className={Styles.Tabs}>
      <TabList className={Styles.TabList}>
        <Tab className={Styles.Tab}>Home & Living</Tab>
        <Tab >Wedding & Party</Tab>
        <Tab>Toys & Entertainment</Tab>
        <Tab>Art & Collectibles</Tab> 
        <Tab>Craft Supplies & Tools</Tab>
        
      </TabList>
    </Tabs>
        </div>
    );
}