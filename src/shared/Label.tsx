import React from "react";

export default ({ label }: { label: string }) => {
  switch (label) {
    default:
      return <></>;
    case "New":
      return <div className="label label--new">New!</div>;
    case "Featured":
      return <div className="label label--featured">Featured</div>;
  }
};
