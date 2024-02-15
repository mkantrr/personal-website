import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Container, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { VisibilityOutlined } from '@material-ui/icons';
import { TextDecrypt } from "./TextDecrypt";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import style from "./specificproject.css";
import ImageDisplay from "../cards/ImageDisplay";
import CardWrapper from "../cards/CardWrapper";
import Resume from "../../settings/resume.json"

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "14vh",
    marginBottom: "0.5vh",
    marginLeft: "-3vw",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
  rightSide: {
    wordWrap: "normal",
    marginTop: "15vh",
    marginLeft: "-12vw",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
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
    position: "fixed",
    display: "flex",
    alignSelf: "flex-end",
    right: "48px",
    bottom: "92px",
    justifyContent: 'right',
  },
  space: {
    marginTop: "-1vh"
  },
  text: {
    position: "fixed",
    wordWrap: "break-word",
    width: "45vw",
    height: "52vh",
    overflow: "auto",
    marginLeft: "0.5vw"
  }
}));

const Spacing = () => {
  return (
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  );
};

export const SpecificProjectPage = () => {
  const classes = useStyles();
  let { projectId } = useParams();
  const projectData = Resume.projects.sections[projectId];
  console.log(projectData);

  let nav = <hr></hr>;
  if (projectData.url) {
    nav = (
      <div className={style.mHolder}>
        <div className={style.cHolder}>
          <Link
            href={projectData.url}
            key={projectId}
            target="_blank"
            rel='noopener noreferrer'
            underline='none'
            color='inherit'
          >
            <Tooltip
              title="View More"
              placement='left'
              TransitionComponent={Zoom}
            >
              <IconButton
                color='inherit'
                aria-label="View More"
                className={classes.iconButton}
              >
                <VisibilityOutlined className={classes.icon} />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`${classes.flex}`}>
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
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
              <CardWrapper width="30vw" height="68.5vh">
                <ImageDisplay caption={true} imgs={projectData.images} />
              </CardWrapper>
            </div>
          </div>
        </Container>
        <Container component="main" className={`${classes.rightSide}`} maxWidth="sm">
          <div className={style.catHolder + " " + style.fade}
            style={{
              marginBottom: "3vh",
              top: "0",
              zIndex: "999"
            }}>
            <CardWrapper width="40vw" blur="none">
              <div style={{
                marginTop: "1.5vh",
                textAlign: "center"
              }}>
                <Typography variant="h2" component="h1" gutterBottom>
                  {projectData.title}
                </Typography>
              </div>
            </CardWrapper>
          </div>
          <div className={style.date}>
            <Typography style={{
              marginTop: "-2vh",
            }} variant="h6" component="h2" gutterBottom>
              <TextDecrypt space={true} text={`${projectData.dates}`} />
            </Typography>
          </div>
          <div className={classes.space}>
            <Spacing />
          </div>
          <div className={classes.text}>
            <Markdown>
              {projectData.summary}
            </Markdown>
          </div>
          <div className={`${classes.iconPos}`}>
            {nav}
          </div>
        </Container>
      </div>
    </>
  );
}