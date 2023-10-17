import { BulkReviewOutputType } from "@/utils/types";
import React from "react";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import NotAvailable from "@/components/NotAvailable";
import BoxHeading from "@/components/BoxHeading";

Chart.register(ArcElement, Tooltip, Legend);

const ReviewPercentage = (props: {
  reviewPercentage: BulkReviewOutputType | undefined;
}) => {
  const data = {
    labels: props.reviewPercentage?.label,
    datasets: [
      {
        label: "Review percentage",
        data: props.reviewPercentage?.data,
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
      {props.reviewPercentage ? (
        <div>
          <BoxHeading label="REVIEWS PERCENTAGE" />
          <Doughnut data={data} className="w-[300px] h-auto" />
        </div>
      ) : (
        <NotAvailable label="Reviews percentage" />
      )}
    </div>
  );
};

export default ReviewPercentage;
