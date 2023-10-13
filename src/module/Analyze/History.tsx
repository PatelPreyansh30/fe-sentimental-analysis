import { SessionReviewType } from "@/utils/types";
import React from "react";

const History = (props: { sessionStorageReviews: SessionReviewType[] }) => {
  return (
    <div className="p-3 border rounded-md shadow-md bg-white">
      {props.sessionStorageReviews.length !== 0 ? (
        <>
          <p className="mb-2 font-mono text-2xl text-center text-orange-500 font-semibold">
            REVIEW HISTORY
          </p>
          <div className="h-[200px] overflow-y-auto whitespace-nowrap">
            {props.sessionStorageReviews.map((item, index) => (
              <div
                key={`local-storage-review-index:${index}`}
                className="flex justify-between items-center w-full p-3 mb-2 cursor-pointer rounded-md border bg-gray-200/70"
              >
                <p>{item.sentence}</p>
                <p className="ml-2 text-white">
                  {item.type === "Positive" && (
                    <span className="p-2 rounded-md bg-green-500">
                      {item.type}
                    </span>
                  )}
                  {item.type === "Negative" && (
                    <span className="p-2 rounded-md bg-red-500">
                      {item.type}
                    </span>
                  )}
                  {item.type === "Neutral" && (
                    <span className="p-2 rounded-md bg-blue-500">
                      {item.type}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-red-600 font-medium">
          Review history details not available
        </p>
      )}
    </div>
  );
};

export default History;
