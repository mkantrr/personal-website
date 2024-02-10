import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { LogoLink } from '../components/logo/LogoLink';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { PortfolioIcons } from '../components/content/PortfolioIcons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  socialIcons: {
    position: 'absolute',
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  iconButton: {
    height: '2.5rem',
    width: '2.5rem',
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: '1.25rem',
  },
}));

export const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        <LogoLink />
        <ThemeToggle />
        <Hidden smDown>
         <PortfolioIcons /> 
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <FooterText />
      </div>
    </>
  );
}