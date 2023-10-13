"use client";

import Loader from "@/components/Loader";
import Gauge from "@/components/Gauge/Gauge";
import React, { useEffect, useState } from "react";
import AnalyzeInput from "./AnalyzeInput";
import { SessionReviewType } from "@/utils/types";

const Analyze = () => {
  const [sessionStorageReviews, setSessionStorageReviews] = useState<
    SessionReviewType[]
  >([]);
  const [sentence, setSentence] = useState<string>("");
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [sentimentType, setSentimentType] = useState("Postive");

  useEffect(() => {
    let reviews = sessionStorage.getItem("review");
    let reviewsList: SessionReviewType[] = reviews ? JSON.parse(reviews) : [];
    setSessionStorageReviews(reviewsList);
  }, [sessionStorageReviews]);

  return (
    <>
      {isApiCalling && <Loader />}
      <div>
        <div className="grid grid-cols-2 gap-4">
          <AnalyzeInput
            sentence={sentence}
            setSentence={setSentence}
            setIsApiCalling={setIsApiCalling}
            setPercentage={setPercentage}
            setSentimentType={setSentimentType}
            setSessionStorageReviews={setSessionStorageReviews}
          />
          <Gauge value={percentage} sentimentType={sentimentType} />
        </div>
        {sessionStorageReviews.length !== 0 && (
          <div className="mt-3 p-2">
            <p className="text-2xl font-semibold">
              <u>Review Analysis</u>
            </p>
            {sessionStorageReviews.map((item, index) => (
              <div
                key={`local-storage-review-index:${index}`}
                className="flex justify-between items-center w-full p-3 mt-2 cursor-pointer rounded-md border bg-gray-200/70"
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
        )}
      </div>
    </>
  );
};

export default Analyze;
