import React from "react";

export default ({
  label,
  onClick,
  icon,
}: {
  label: string;
  onClick(): void;
  icon?: any;
}) => {
  return (
    <div className="tag-wrapper">
      <div
        className={`tag ${icon ? "tag--has-icon" : "tag--no-icon"}`}
        onClick={!icon ? onClick : undefined}
      >
        {label}
      </div>
      {icon && <img src={icon} className="tag-icon" onClick={onClick} />}
    </div>
  );
};
