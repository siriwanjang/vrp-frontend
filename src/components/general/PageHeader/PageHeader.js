import React from "react";
import classes from "./PageHeader.module.css";

const PageHeader = (props) => {
  return (
    <div className={classes.ContentHeader}>
      {props.headerTitle}
      <hr />
    </div>
  );
};

export default PageHeader;
