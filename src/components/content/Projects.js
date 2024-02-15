import React, { useEffect } from "react";
import { Typography, Container, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import ProjectCard from "../cards/ProjectCard";
import Resume from "../../settings/resume.json";
import style from "./projects.css";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "14vh",
    marginBottom: "0.5vh",
    marginLeft: "10vw",
    marginRight: "10vw",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
  rightSide: {
    marginTop: "14vh",
    marginLeft: "-22vw",
  },
  flex: {
    display: "flex",
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
  iconPos: {
    marginTop:"3vh",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Spacing = () => {
  return (
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  );
};

function create_section() {
  let projs = [];
  for (const [key, value] of Object.entries(Resume.projects.sections)) {
    var currentProject = value;
    projs.push(
      <div key={key} id={key.toLowerCase()} className={style.spacer}>
        <Link
          href={`/portfolio/projects/${key}`}
          key={key}
          rel='noopener noreferrer'
          underline='none'
          color='inherit'
        >
          <ProjectCard width="36.5vw" height="38vh" pName={key} data={currentProject} />
        </Link>
      </div>
    );
    
  for (let i = 0; i < 1; i++) {
      projs.push(<Spacing />)
    }
  }

    return (
        <div className={style.proHolder}>
          <div className={style.gridOrFlex + " moreCardGap"}>
            {projs}
          </div>
        </div>
    );
}

let sections = [];
sections.push(create_section());

export const ProjectsHomePage = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1,
    );
    if (window.location.href.lastIndexOf('#') > 0) {
      document.getElementById(href)?.scrollIntoView();
    }
   });

  return (
    <>
      <div className={`${classes.flex}`}>
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            <TextDecrypt text="Projects" />
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            {`${Resume.projects.overview}`}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            {`${Resume.projects.snippet}`}
          </Typography>
          <div className={`${classes.iconPos}`}>
            <Link
              href={Resume.basics.profiles[3].url}
              key={Resume.basics.profiles[3].network.toLowerCase()}
              target='_blank'
              rel='noopener noreferrer'
              underline='none'
              color='inherit'
            >
              <Tooltip
                title={Resume.basics.profiles[3].username}
                placement='bottom'
                TransitionComponent={Zoom}
              >
                <IconButton
                  color='inherit'
                  aria-label={Resume.basics.profiles[3].network}
                  className={classes.iconButton}
                >
                  <i className={`${classes.icon} ${Resume.basics.profiles[3].x_icon}`}></i>
                </IconButton>
              </Tooltip>
            </Link>
          </div>
        </Container>
        <Container component="main" className={`${classes.rightSide}`} maxWidth="sm">
          <div
            style={{
              position: "fixed",
              width: "60%",
              height: "75%",
              overflow: "auto"
            }}>
            <div
              style={{
                margin: "20%",
                marginTop: "2vh",
                height: "100%"
              }}>
              {sections}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};