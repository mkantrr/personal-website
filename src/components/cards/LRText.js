import React from "react";
import style from "./LRText.module.css"
import { TextDecrypt } from "../content/TextDecrypt";

const LRText = (props) => {
    if (props.decrypt === true) {
        return (
            <div className={style.parent}>
                <TextDecrypt text={props.leftText} />
                <TextDecrypt className={style.right} text={props.rightText} />
            </div>
        )
    }
    return (
        <div className={style.parent}>
            <p>{props.leftText}</p>
            <p className={style.right}>{props.rightText}</p>
        </div>
    )
}

export default LRText;