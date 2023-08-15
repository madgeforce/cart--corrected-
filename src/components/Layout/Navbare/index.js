import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import styles from './navbare.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import Button from '../../Button';
import { Divider, IconButton } from '@mui/material';



export default function DirectionStack() {
  return (
    <div className={styles.Container}>
      <Stack direction="row" spacing={2}
        className={styles.logoRow}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button
          color="inherit"
          type={'contained'}
          className={styles.item + ` ${styles.logo}`}
        >
          CORAL
        </Button>
        <div className={styles.ButtonsContainer}>
          <Button
            color="inherit"
            type={'contained'}
            startIcon={<PersonRoundedIcon />}
            className={styles.item + ` ${styles.desktop}`}
            style={{
              marginRight: "5px"
            }}
          >
            Account
          </Button>
          <Button
            color="inherit"
            type={'contained'}
            startIcon={<ShoppingBagRoundedIcon />}
            className={styles.item + ` ${styles.desktop}`}
          >
            Shopping
          </Button>
        </div>
      </Stack>
      <Divider className={styles.desktop}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        {
          [
            { name: "Home & Living" },
            { name: "Wedding & Party" },
            { name: "Toys & Entertainment" },
            { name: "Art & Collectibles" },
            { name: "Craft Supplies & Tools" },
          ].map((item) =>
            <Button
              color="inherit"
              type={'contained'}
              className={styles.navbarButtons + ` ${styles.desktop}`}
            >
              {item.name}
            </Button>
          )
        }

      </Stack>
    </div >
  );
}