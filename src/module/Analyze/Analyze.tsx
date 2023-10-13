"use client";

import Loader from "@/components/Loader";
import Gauge from "@/components/Gauge/Gauge";
import React, { useEffect, useState } from "react";
import AnalyzeInput from "./AnalyzeInput";
import { SessionReviewType } from "@/utils/types";
import History from "./History";

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
      <div className="grid grid-cols-1 gap-4">
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
        <History sessionStorageReviews={sessionStorageReviews} />
      </div>
    </>
  );
};

export default Analyze;
