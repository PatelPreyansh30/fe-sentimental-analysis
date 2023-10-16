import React from "react";

const Warnings = (props: { label: string }) => {
  return <p className={`text-gray-400 text-sm font-medium`}>{props.label}</p>;
};

export default Warnings;
