import React from "react";
import UtilityLink from "../UtilityLink";
import { ArrowLeft } from "react-feather";
import style from "./backbtn.module.css";
import { DELAY_EXIT } from "@/constans";

function BackBtn() {
  return (
    <UtilityLink delayTime={DELAY_EXIT} className={style.wrapper} href="\">
      <ArrowLeft size={15} />
      <span>Back</span>
    </UtilityLink>
  );
}

export default BackBtn;
