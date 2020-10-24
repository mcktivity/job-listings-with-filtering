import React from "react";

export default ({ label, onClick }: { label: string; onClick(): void }) => (
  <button className="btn" aria-label={label} onClick={onClick}>
    {label}
  </button>
);
