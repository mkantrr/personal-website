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
};