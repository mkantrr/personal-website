import React from 'react';
import { Link, Tooltip, IconButton, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Resume from '../../settings/resume.json';

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    position: 'absolute',
    top: theme.spacing(6),
    right: theme.spacing(6),
  },
  menuIcons: {
    position: 'absolute',
    display: 'flex',
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

const Spacing = () => {
  return (
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  );
};

export const PortfolioIcons = () => {
  const classes = useStyles();

    const menuItems = Resume.basics.menuIcons.map((menuItem) => (
      <>
      <Link
        href={menuItem.url}
        key={menuItem.network.toLowerCase()}
        rel='noopener noreferrer'
        underline='none'
        color='inherit'
      >
        <Tooltip
          title={menuItem.username}
          placement='bottom'
          TransitionComponent={Zoom}
        >
          <IconButton
            color='inherit'
            aria-label={menuItem.network}
            className={classes.iconButton}
          >
            <i className={`${classes.icon} ${menuItem.x_icon}`}></i>
          </IconButton>
        </Tooltip>
      </Link>
      <Spacing />
      </>
    ));


  return (
    <>
    <div className={classes.menuIcons}>
      {menuItems}
      <Link
        href='/portfolio'
        key='portfolio'
        rel='noopener noreferrer'
        underline='none'
        color='inherit'
      >
        <Tooltip
          title='Portfolio'
          placement='bottom'
          TransitionComponent={Zoom}
        >
          <IconButton
            color='inherit'
            aria-label='Portfolio'
            className={classes.iconButton}
          >
            <i className={`${classes.icon} fas fa-folder`}></i>
          </IconButton>
        </Tooltip>
      </Link>
    </div>
    <div className={classes.socialIcons}>
    <Link
      href='/portfolio'
      key='portfolio'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
        <IconButton
          color='inherit'
          aria-label='Portfolio'
          className={classes.iconButton}
        >
          <i className={`${classes.icon} fas fa-folder`}></i>
        </IconButton>
    </Link>
    <Link
      href='https://github.com/mkantrr'
      key='github'
      target='_blank'
      rel='noopener noreferrer'
      underline='none'
      color='inherit'
    >
      <Tooltip
        title='mkantrr'
        placement='left'
        TransitionComponent={Zoom}
      >
        <IconButton
          color='inherit'
          aria-label='GitHub'
          className={classes.iconButton}
        >
          <i className={`${classes.icon} fab fa-github`}></i>
        </IconButton>
      </Tooltip>
    </Link>
  </div>
  </>
  );
};