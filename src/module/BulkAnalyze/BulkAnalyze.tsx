"use client";

import React, { useEffect, useState } from "react";
import appClient from "@/network/appClient";
import { ApiConstant } from "@/constant/applicationConstant";
import Loader from "@/components/Loader";
import { joiUtils } from "@/utils/joiValidation";
import { ToastErrorMessage } from "@/utils/toastifyAlerts";

const BulkAnalyze = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isApiCalling, setIsApiCalling] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsButtonClicked(false);
    setIsApiCalling(false);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
    }
  };
  const handleOnClick = () => {
    setIsButtonClicked(true);

    getBulkReviewAnalysis();

    // joi validation for bulk analysis file input goes here

    // const result = joiUtils.validateReviewData(sentence);
    // if (result.status) {
    //   getReviewAnalysis();
    // } else {
    //   ToastErrorMessage(result.message);
    // }
  };

  const getBulkReviewAnalysis = async () => {
    setIsApiCalling(true);
    try {
      if (uploadedFile) {
        const fileData = new FormData();
        fileData.append("file", uploadedFile);
        const res = await appClient.post(
          ApiConstant.GET_BULK_REVIEW_RESULT,
          fileData
        );
      }
      setIsApiCalling(false);
    } catch {
      setIsApiCalling(false);
      setIsButtonClicked(false);
      console.log("api failed");
    }
  };

  return (
    <>
      {isApiCalling && <Loader />}
      <p>Bulk Analysis Dash Board</p>
      Upload File
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleOnClick}
        className={`mt-3 px-6 py-2 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600`}
        // className={`mt-3 px-6 py-2 rounded-full text-white font-semibold bg-green-500 ${isButtonClicked ? "cursor-not-allowed" : "hover:bg-green-600"}`}
        disabled={isButtonClicked}
      >
        Analyze
      </button>
    </>
  );
};

export default BulkAnalyze;
