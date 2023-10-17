import BoxHeading from "@/components/BoxHeading";
import NotAvailable from "@/components/NotAvailable";
import { SessionReviewType } from "@/utils/types";
import React from "react";

const History = (props: { sessionStorageReviews: SessionReviewType[] }) => {
  return (
    <div className="p-3 border rounded-md shadow-md bg-white">
      {props.sessionStorageReviews.length !== 0 ? (
        <>
          <BoxHeading label="REVIEW HISTORY" />
          <div className="h-[400px] overflow-y-auto">
            {props.sessionStorageReviews.map((item, index) => (
              <div
                key={`local-storage-review-index:${index}`}
                className="flex justify-between items-center w-full p-3 mb-2 cursor-pointer rounded-md border bg-gray-200/70"
              >
                <p>{item.sentence}</p>
                <p className="ml-4 text-white">
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
        <NotAvailable label="Review history" />
      )}
    </div>
  );
};

export default History;
