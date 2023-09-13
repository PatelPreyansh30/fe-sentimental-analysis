"use client";

import Loader from "@/components/Loader";
import { ApiConstant } from "@/constant/applicationConstant";
import appClient from "@/network/appClient";
import { joiUtils } from "@/utils/joiValidation";
import { ToastErrorMessage } from "@/utils/toastifyAlerts";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Analyze = () => {
  const [localStorageReviews, setLocalStorageReviews] = useState<
    { sentence: string; type: string }[]
  >([]);
  const [sentence, setSentence] = useState<string>("");
  const [reviewStatus, setReviewStatus] = useState<string | undefined>();
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    let reviews = localStorage.getItem("review");
    let reviewsList: { sentence: string; type: string }[] = reviews
      ? JSON.parse(reviews)
      : [];
    setLocalStorageReviews(reviewsList);
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsButtonClicked(false);
    setIsApiCalling(false);
    setReviewStatus(undefined);
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

  const getReviewAnalysis = async () => {
    setIsApiCalling(true);
    try {
      const res = await appClient.post(ApiConstant.GET_REVIEW_RESULT, {
        sentence: sentence,
      });
      setReviewStatus(res.data.result.type);

      let existingReview = localStorage.getItem("review");
      let reviewObjectList: { sentence: string; type: string }[] =
        existingReview ? JSON.parse(existingReview) : [];
      reviewObjectList.push({
        sentence: sentence,
        type: res.data.result.type,
      });
      let updatedReviewList = JSON.stringify(reviewObjectList);
      localStorage.setItem("review", updatedReviewList);

      setIsApiCalling(false);
    } catch {
      setIsApiCalling(false);
      setIsButtonClicked(false);
    }
  };

  return (
    <>
      {isApiCalling && <Loader />}
      <div className="p-3">
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
          className={`mt-3 px-6 py-2 rounded-full text-white bg-blue-400 ${
            isButtonClicked ? "cursor-not-allowed" : "hover:bg-blue-500"
          } border`}
          disabled={isButtonClicked}
        >
          Analyze
        </button>
        {reviewStatus && (
          <div className="mt-3 p-2">
            <p className="text-2xl font-semibold">
              <u>Review Analysis</u>
            </p>
            {localStorageReviews &&
              localStorageReviews.map((item, index) => (
                <div
                  key={`local-storage-review-index:${index}`}
                  className="flex items-center w-full p-3 mt-2 rounded-md bg-slate-100 hover:bg-slate-200"
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
