import React from "react";
import style from "./CardWrapper.module.css";

const CardWrapper = (props) => {
  const height = props.height ? props.height : "";
  const width = props.width ? props.width : "";
  const maxWidth = props.maxWidth ? props.maxWidth : "";
  const maxHeight = props.maxHeight ? props.maxHeight : "";
  const minWidth = props.minWidth ? props.minWidth : "";
  const minHeight = props.minHeight ? props.minHeight : "";

  let cls = props.hover === "none" 
  ? (props.blur === "none" ? style.title : style.cardWrapper) 
  : (props.blur === "none" ? style.title + " " + style.cardWrapperHover : style.cardWrapper + " " + style.cardWrapperHover);
  if (props.onClick) {
    cls += " " + style.clickable;
  }

  return (
    <div
      className={props.linkColor + " " + cls + " card_wrapper"}
      style={{ height: height, 
               width: width, 
               minWidth: minWidth, 
               minHeight: minHeight, 
               maxWidth: maxWidth, 
               maxHeight: maxHeight}}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default CardWrapper;
