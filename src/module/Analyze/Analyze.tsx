"use client";

import { ApiConstant } from "@/constant/applicationConstant";
import appClient from "@/network/appClient";
import { joiUtils } from "@/utils/joiValidation";
import { ToastErrorMessage } from "@/utils/toastifyAlerts";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const Analyze = () => {
  const [sentence, setSentence] = useState<string>("");
  const [reviewStatus, setReviewStatus] = useState<string | undefined>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSentence(value);
  };

  const handleOnClick = () => {
    const result = joiUtils.validateReviewData(sentence);
    if (result.status) {
      getReviewAnalysis();
    } else {
      ToastErrorMessage(result.message);
    }
  };

  const getReviewAnalysis = async () => {
    const res = await appClient.post(ApiConstant.GET_REVIEW_RESULT, {
      sentence: sentence,
    });
    setReviewStatus(res.data.result);
  };

  return (
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
        className="mt-3 px-6 py-2 rounded-full text-white bg-blue-400 hover:bg-blue-500 border"
      >
        Analyze
      </button>
    </div>
  );
};

export default Analyze;
