import React from "react";

const NotAvailable = (props: { label: string }) => {
  return (
    <p className={`block text-red-600 font-medium`}>
      {`${props.label} details not available`}
    </p>
  );
};

export default NotAvailable;
