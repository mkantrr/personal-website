import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import { BusinessCard } from '../content/BusCardButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'absolute',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const FooterText = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href='https://dot.cards/matutu'
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <BusinessCard />
      <div>&nbsp;&nbsp;&nbsp;</div>
      <Typography variant='subtitle2'>
        <TextDecrypt text={'Business Card'} />
      </Typography>
    </Link>
  );
};
