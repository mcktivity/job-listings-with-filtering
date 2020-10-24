import React from "react";

export default ({
  url,
  label,
  className,
}: {
  url: string;
  className?: string;
  label?: string;
}) => <img className={className ?? ""} src={url} alt={label ?? ""} />;
