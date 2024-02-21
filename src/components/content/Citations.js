import React from "react";
import Markdown from "react-markdown";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import CardWrapper from "../cards/CardWrapper";
import ImageDisplay from "../cards/ImageDisplay";
import Resume from "../../settings/resume.json";
import style from "./Citations.module.css"

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "25vh",
    marginBottom: "0.5vh",
    marginLeft: "10vw",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
  rightSide: {
    marginTop: "18vh",
    marginLeft: "-5vw",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
  flex: {
    display: "flex",
  },
}));

export const Citations = () => {
    const classes = useStyles();
   

  return (
    <>
      <div className={`${classes.flex}`}>
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            <TextDecrypt text="Credits" />
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            <Markdown linkTarget="_blank" className={style.links}>
              {Resume.credits.description}
            </Markdown>
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            <Markdown linkTarget="_blank" className={style.links}>
              {Resume.credits.special_thanks}
            </Markdown>
          </Typography>
        </Container>
        <Container component="main" className={classes.rightSide} maxWidth="sm">
          <CardWrapper hover="none" width="36.5vw" height="68vh">
            <ImageDisplay imgs={Resume.credits.images} />
          </CardWrapper>
        </Container>
      </div>
    </>
  );
};