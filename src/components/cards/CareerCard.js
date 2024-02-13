import React from "react";
import Markdown from "react-markdown";
import { Typography } from "@material-ui/core";
import CardWrapper from "./CardWrapper";
import LRText from "./LRText";
import ImageDisplay from "./ImageDisplay";

import style from "./CareerCard.module.css";

const CareerCard = (props) => {
  let value = props.data;

  let imDisp = "";
  let pSyle = "";
  if (value.images) {
    imDisp = <ImageDisplay imgs={value.images} />;
    pSyle = style.parent;
  }

  return (
    <CardWrapper maxWidth="800px" hover="none">
      <div id={props.id} className={pSyle}>
        <div className={style.imCont}>
          <div className={style.imHolder}>{imDisp}</div>
        </div>
        <div className={style.topCont}>
          <LRText leftText={value.dates} />
          <Typography variant="h6" component="h1" className={style.title}>
            {value.title}
          </Typography>
        </div>
      </div>
      <div className={style.content}>
        <Markdown>{value.description}</Markdown>
      </div>
    </CardWrapper>
  );
};

export default CareerCard;
