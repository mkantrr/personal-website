import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from '@material-ui/core';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { WelcomePage } from '../components/content/Welcome';
import { LogoLink } from '../components/logo/LogoLink';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { PortfolioIcons } from '../components/content/PortfolioIcons';
import Resume from "../settings/resume.json";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
}));

export const ProjectPage = () => {
  let { projectId } = useParams();
  const projectData = Resume.projects[projectId];
  const classes = useStyles();

  if (!projectData) { 
    return (<Redirect to='/portfolio/projects' replace />)
  }

  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        <LogoLink />
        <WelcomePage />
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