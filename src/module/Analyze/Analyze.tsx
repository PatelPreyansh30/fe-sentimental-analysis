"use client";

import Loader from "@/components/Loader";
import Gauge from "@/components/Gauge/Gauge";
import { ApiConstant } from "@/constant/applicationConstant";
import appClient from "@/network/appClient";
import { joiUtils } from "@/utils/joiValidation";
import { ToastErrorMessage } from "@/utils/toastifyAlerts";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Analyze = () => {
  const [sessionStorageReviews, setSessionStorageReviews] = useState<
    { sentence: string; type: string }[]
  >([]);
  const [sentence, setSentence] = useState<string>("");
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    let reviews = sessionStorage.getItem("review");
    let reviewsList: { sentence: string; type: string }[] = reviews
      ? JSON.parse(reviews)
      : [];
    setSessionStorageReviews(reviewsList);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsButtonClicked(false);
    setIsApiCalling(false);
    const { value } = e.currentTarget;
    setSentence(value);
  };

  const handleOnClick = () => {
    setIsButtonClicked(true);
    const result = joiUtils.validateReviewData(sentence);
    if (result.status) {
      getReviewAnalysis();
    } else {
      ToastErrorMessage(result.message);
    }
  };

  const handelPercentage = (probability: number, type: string) => {

    if(type == 'Positive'){
      return 200 + probability
    }
    else if(type == 'Neutral'){
      return 100 + probability
    }
    return probability
  }
  const getReviewAnalysis = async () => {
    setIsApiCalling(true);
    try {
      const res = await appClient.post(ApiConstant.GET_REVIEW_RESULT, {
        sentence: sentence,
      });

      // Setting new review in session storage
      let existingReview = sessionStorage.getItem("review");
      let reviewObjectList: { sentence: string; type: string }[] =
        existingReview ? JSON.parse(existingReview) : [];
      reviewObjectList.push({
        sentence: sentence,
        type: res.data.result.type,
      });
      let updatedReviewList = JSON.stringify(reviewObjectList);
      sessionStorage.setItem("review", updatedReviewList);

      // Setting new review in state
      setSessionStorageReviews((state) => [
        ...state,
        { sentence: sentence, type: res.data.result.type },
      ]);

      setIsApiCalling(false);
    } catch {
      setIsApiCalling(false);
      setIsButtonClicked(false);
    }
  };

  const textColor = '#AAA';
  return (
    <>
      {isApiCalling && <Loader />}
      <div>
        <TextField
          value={sentence}
          onChange={handleOnChange}
          name="sentence"
          id="outlined-textarea"
          label="Enter your review"
          multiline
          fullWidth
        />
        <button
          onClick={handleOnClick}
          className={`mt-3 px-6 py-2 rounded-full text-white font-semibold bg-green-500 ${
            isButtonClicked ? "cursor-not-allowed" : "hover:bg-green-600"
          }`}
          disabled={isButtonClicked}
        >
          Analyze
        </button>
        {sessionStorageReviews.length !== 0 && (
          <div className="mt-3 p-2">
            <p className="text-2xl font-semibold">
              <u>Review Analysis</u>
            </p>
            {sessionStorageReviews.reverse().map((item, index) => (
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
        <Gauge percentage={percentage}/>
      </div>
    </>
  );
};

export default Analyze;
