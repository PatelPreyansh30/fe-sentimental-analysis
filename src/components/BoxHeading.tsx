import React from "react";

const BoxHeading = (props: { label: string }) => {
  return (
    <p className="block w-full mb-2 font-poppins text-xl text-indigo-600 tracking-wider font-semibold text-center">
      {props.label}
    </p>
  );
};

export default BoxHeading;
