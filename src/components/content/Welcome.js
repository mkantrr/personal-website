import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import CardWrapper from "../cards/CardWrapper";
import ImageDisplay from "../cards/ImageDisplay";
import Resume from "../../settings/resume.json";

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
    marginLeft: "0vw",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
  flex: {
    display: "flex",
  },
}));

export const WelcomePage = () => {
    const classes = useStyles();
   
    
    return (
      <>      
      <div className={`${classes.flex}`}>
      <Container component="main" className={`${classes.main}`} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
              <TextDecrypt text="Welcome!" />
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
               {`${Resume.about.description}`}
          </Typography>
      </Container>
      <Container component="main" className={`${classes.rightSide}`} maxWidth="sm">
        <CardWrapper width="100%" height="630px">
        <ImageDisplay imgs={Resume.about.images} />
        </CardWrapper>
      </Container>
      </div>
      </>
    );
    /*return (
        <div className={classes.main}>
          <div className={style.topSection}>
            <div className={style.imgCont}>
              <ImageDisplay imgs={Resume.about.images} />
            </div>
            <div className={style.descHolder}>
              <div className={style.content}>
                <h1>Welcome!</h1>
                <Typography>{Resume.about.description}</Typography>
              </div>
            </div>
          </div>
          <div className={style.proHolder}>
            <div className={style.gridOrFlex}>
              <CardWrapper
                width="200px"
                height="300px"
                onClick={() => {
                  window.location = "/portfolio/career";
                }}
              >
                <div style={classes.centerStyle}>
                  <h1 className={style.linksTitle}>Career</h1>
                </div>
              </CardWrapper>
              <CardWrapper
                width="200px"
                height="300px"
                onClick={() => {
                  window.location = "/portfolio/projects";
                }}
              >
                <div style={classes.centerStyle}>
                  <h1 className={style.linksTitle}>Projects</h1>
                </div>
              </CardWrapper>
            </div>
          </div>
        </div>
      );
      */
};