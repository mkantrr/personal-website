import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.secondary.main,
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:focus': {
      transform: 'scale(1.1)',
    },
    transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)',
    transform: 'scale(1.4)',
    overflow: 'visible !important',
  },
}));

export const BusinessCard = () => {
  const classes = useStyles();

  return (
    <i className={`far fa-address-card ${classes.svgHover}`}></i>
  );
}
