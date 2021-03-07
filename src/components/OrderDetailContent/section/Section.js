import React from "react";

const Section = (props) => {
  return (
    <div style={{ marginTop: 20 }}>
      <h4>{props.sectionTitle}</h4>
      {props.children}
    </div>
  );
};

export default Section;
