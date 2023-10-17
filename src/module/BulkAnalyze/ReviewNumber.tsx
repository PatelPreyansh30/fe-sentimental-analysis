import React from "react";
import {
  Chart,
  ArcElement,
  Legend,
  Tooltip,
  RadialLinearScale,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { BulkReviewOutputType } from "@/utils/types";
import NotAvailable from "@/components/NotAvailable";
import BoxHeading from "@/components/BoxHeading";

Chart.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const ReviewNumber = (props: {
  reviewNumber: BulkReviewOutputType | undefined;
}) => {
  const data = {
    labels: props.reviewNumber?.label,
    datasets: [
      {
        label: "Review number",
        data: props.reviewNumber?.data,
        backgroundColor: [
          "rgba(2, 204, 204, 0.4)",
          "rgba(111, 87, 233, 0.4)",
          "rgba(236, 91, 134, 0.4)",
        ],
        borderColor: [
          "rgba(2, 204, 204, 1)",
          "rgba(111, 87, 233, 1)",
          "rgba(236, 91, 134, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center p-3 border rounded-md shadow-md bg-white">
      {props.reviewNumber ? (
        <div>
          <BoxHeading label="REVIEWS NUMBER" />
          <PolarArea data={data} className="w-[300px] h-auto" />
        </div>
      ) : (
        <NotAvailable label="Reviews number" />
      )}
    </div>
  );
};

export default ReviewNumber;
