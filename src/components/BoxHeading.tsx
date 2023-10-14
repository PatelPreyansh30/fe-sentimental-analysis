import React from "react";

const BoxHeading = (props: { label: string }) => {
  return (
    <p className="block w-full mb-2 text-2xl text-indigo-600 font-semibold text-center">
      {props.label}
    </p>
  );
};

export default BoxHeading;
