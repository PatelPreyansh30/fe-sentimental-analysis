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
    <div className="p-3 border rounded-md shadow-md bg-white">
      <p className="mb-2 font-mono text-2xl text-center text-orange-500 font-semibold">
        REVIEW OUTPUT
      </p>
      <div className="flex items-center justify-center">
        <div className="relative w-[180px] h-[180px]">
          <ReviewsProvider valueStart={0} valueEnd={props.value}>
            {(value: number) => (
              <div className="absolute">
                <CircularProgressbar
                  value={value}
                  circleRatio={0.7}
                  styles={{
                    trail: {
                      strokeLinecap: "round",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                    },
                    path: {
                      strokeLinecap: "round",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                      stroke: calcColor(props.sentimentType),
                    },
                  }}
                />
              </div>
            )}
          </ReviewsProvider>
          <div className="absolute w-full h-full flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">{`${props.value}%`}</p>
            <p className="text-xl">{props.sentimentType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gauge;
