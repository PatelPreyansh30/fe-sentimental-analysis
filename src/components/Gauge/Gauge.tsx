import React from "react";
import ReviewsProvider from "./ReviewsProvider";
import { GaugePropsTypes } from "@/utils/types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Gauge = (props: GaugePropsTypes) => {
  const calcColor = (sentiment: string) => {
    if (sentiment === "Positive") {
      return "hsl(142, 70.6%, 45.3%)";
    } else if (sentiment === "Negative") {
      return "hsl(0, 84.2%, 60.2%)";
    } else if (sentiment === "Neutral") {
      return "hsl(217, 91.2%, 59.8%)";
    }
  };

  return (
    <div className="flex items-center justify-center border rounded-md shadow-md bg-white">
      <ReviewsProvider valueStart={0} valueEnd={props.value}>
        {(value: number) => (
          <div className="w-[200px] h-[200px] mt-3">
            <CircularProgressbar
              value={value}
              text={`${value}% `}
              circleRatio={0.7} // 0.7 default
              styles={{
                trail: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)", // -126deg default
                  transformOrigin: "center center",
                },
                path: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                  stroke: calcColor(props.sentimentType),
                },
                text: {
                  fill: "#000",
                },
              }}
              strokeWidth={7}
            />
          </div>
        )}
      </ReviewsProvider>
    </div>
  );
};

export default Gauge;
