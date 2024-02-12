import React from "react";
import { Typography, Container, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import CardWrapper from "../cards/CardWrapper";
import CareerCard from "../cards/CareerCard";
import Resume from "../../settings/resume.json";
import style from "./experience.css";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "20vh",
    marginBottom: "0.5vh",
    marginLeft: "10vw",
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(4),
    },
  },
  rightSide: {
    marginTop: "14vh",
    marginLeft: "-25vw",
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
    marginTop:"5vh",
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

function create_section(data, name) {
  let cards = [];
  for (const [key, value] of Object.entries(data)) {
    cards.push(
      <>
        <CareerCard key={key} data={value} id={key} />
      </>
    );
  }
  for (let i = 0; i < 3; i++) {
    cards.push(<Spacing />)
  }

  return (
    <div key={name}>
      <div className={style.catHolder + " " + style.fade}
           style={{position: "sticky", top: "0", zIndex: "999"}}>
        <CardWrapper width="98.2%" blur="none">
          <div style={{
            textAlign: "center"
          }}>
          <Typography variant="h5" component="h2" className={style.linksTitle}>
            <TextDecrypt text={name} />
          </Typography>
          </div>
        </CardWrapper>
      </div>
      <div className={style.proHolder}>
        <div className={style.gridOrFlex + " moreCardGap"}>
          {cards}
        </div>
      </div>
    </div>
  );
}

let sections = []
for (const [key, value] of Object.entries(Resume.career.sections)) {
  sections.push(create_section(value, key));
}

export const CareerPage = () => {
  const classes = useStyles();


  return (
    <>
      <div className={`${classes.flex}`}>
        <Container component="main" className={`${classes.main}`} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            <TextDecrypt text="Overview" />
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            {`${Resume.career.overview}`}
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            {`${Resume.career.resume_snippet}`}
          </Typography>
          <div className={`${classes.iconPos}`}>
            <Link
              href={Resume.basics.profiles[0].url}
              key={Resume.basics.profiles[0].network.toLowerCase()}
              target='_blank'
              rel='noopener noreferrer'
              underline='none'
              color='inherit'
            >
              <Tooltip
                title={Resume.basics.profiles[0].username}
                placement='bottom'
                TransitionComponent={Zoom}
              >
                <IconButton
                  color='inherit'
                  aria-label={Resume.basics.profiles[0].network}
                  className={classes.iconButton}
                >
                  <i className={`${classes.icon} ${Resume.basics.profiles[0].x_icon}`}></i>
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
              overflow: "auto"}}>
          <div
            style={{
              margin: "20%",
              marginTop: "0vh",
              height: "100%"
            }}>
          {sections}
          </div>
          </div>
        </Container>
      </div>
    </>
  );

  /*
  const Career = () => {
    return (
      <div>
        <div className={style.topSection}>
          <div className={style.descHolder}>
            <Markdown>{cData.overview}</Markdown>
          </div>
          <div className={style.bHolder}>
            <div className={style.button}>
              <NavButton name="Resume" link={cData.resume} />
            </div>
          </div>
        </div>
        {sections}
      </div>
    );
  };
  
  export default Career;
        */
};