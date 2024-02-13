import React from "react";
import style from "./ProjectCard.module.css";
import { Typography, Link, Tooltip, IconButton, Zoom } from "@material-ui/core";
import { TextDecrypt } from "../content/TextDecrypt";
import { makeStyles } from "@material-ui/core/styles";
import ImageDisplay from "./ImageDisplay";
import LRText from "./LRText";
import { VisibilityOutlined } from '@material-ui/icons';
import CardWrapper from "./CardWrapper";

const useStyles = makeStyles((theme) => ({
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

const ProjectCard = (props) => {
  const classes = useStyles();

  const height = props.height ? props.height : "300px";
  const width = props.width ? props.width : "";

  const projectData = props.data;

  return (
    <CardWrapper maxWidth="800px" width={width} height={height}>
      <div className={style.pContainer}>
        <div className={style.imgContainer}>
          <ImageDisplay imgs={projectData.images} />
        </div>
        <div className={style.notImgContainer}>
          <div className={style.content}>
            <div className={style.lr}>
              <LRText leftText={projectData.dates} />
            </div>
            <div className="hideScroll" style={{ width: "100%", overflow: "auto" }}>
              <Typography variant="h6" component="h1" className={style.title}>
                <TextDecrypt text={projectData.title} />
              </Typography>
            </div>
            <div className={style.main}>{projectData.tagline ? projectData.tagline : (projectData.summary.split(".")[0] + ".")}</div>
            <div className={style.footer}>
              <Link
                href={`/projects/${props.pName}`}
                key={`${props.pName}`}
                rel='noopener noreferrer'
                underline='none'
                color='inherit'
              >
                <Tooltip
                  title={"View More"}
                  placement="right"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    color="inherit"
                    aria-label={"View More"}
                    className={classes.iconButton}
                >
                  <VisibilityOutlined className={classes.icon} />
                </IconButton>
              </Tooltip>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
