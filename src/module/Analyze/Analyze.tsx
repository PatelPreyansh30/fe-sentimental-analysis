"use client";

import Loader from "@/components/Loader";
import Gauge from "@/components/Gauge/Gauge";
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
  const [percentage, setPercentage] = useState(0)

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
      setReviewStatus(res.data.result.type);
      console.log(res);
      const probPercentage = handelPercentage(res.data.result.scaled_probability, res.data.result.type)
      setPercentage(probPercentage)
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
          className={`mt-3 px-6 py-2 rounded-full text-white bg-blue-400 ${isButtonClicked ? "cursor-not-allowed" : "hover:bg-blue-500"
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
            <div className="flex items-center w-max p-3 mt-2 rounded-md bg-slate-100 hover:bg-slate-200">
              <p>{sentence}</p>
              <p className="ml-2 text-white">
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
        <Gauge percentage={percentage}/>
      </div>
    </>
  );
};

export default Analyze;
