"use client";

import Loader from "@/components/Loader";
import { ApiConstant } from "@/constant/applicationConstant";
import appClient from "@/network/appClient";
import { joiUtils } from "@/utils/joiValidation";
import { ToastErrorMessage } from "@/utils/toastifyAlerts";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const Analyze = () => {
  const [sentence, setSentence] = useState<string>("");
  const [reviewStatus, setReviewStatus] = useState<string | undefined>();
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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

  const getReviewAnalysis = async () => {
    setIsApiCalling(true);
    try {
      const res = await appClient.post(ApiConstant.GET_REVIEW_RESULT, {
        sentence: sentence,
      });
      setReviewStatus(res.data.result);
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
            <div className="grid grid-cols-[auto_auto] gap-[10px] items-center mt-2">
              <p>{sentence}</p>
              <p className="text-white">
                {reviewStatus === "Positive" && (
                  <span className="p-2 rounded-md bg-green-500">
                    {reviewStatus}
                  </span>
                )}
                {reviewStatus === "Negative" && (
                  <span className="p-2 rounded-md bg-red-500">
                    {reviewStatus}
                  </span>
                )}
                {reviewStatus === "Neutral" && (
                  <span className="p-2 rounded-md bg-blue-500">
                    {reviewStatus}
                  </span>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Analyze;
