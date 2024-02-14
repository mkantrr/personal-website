import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { SpecificProjectPage } from '../components/content/SpecificProject';
import { LogoLink } from '../components/logo/LogoLink';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { PortfolioIcons } from '../components/content/PortfolioIcons';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
}));

export const ProjectPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        <LogoLink />
        <SpecificProjectPage />
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