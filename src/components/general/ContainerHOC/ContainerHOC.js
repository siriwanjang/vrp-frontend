import React from "react";

const ContainerHOC = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default ContainerHOC;
