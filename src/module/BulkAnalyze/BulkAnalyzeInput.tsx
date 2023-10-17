import BoxHeading from "@/components/BoxHeading";
import Warnings from "@/components/Warnings";
import { ApiConstant } from "@/constant/applicationConstant";
import appClient from "@/network/appClient";
import { ToastErrorMessage } from "@/utils/toastifyAlerts";
import React, { useState } from "react";

const BulkAnalyzeInput = (props: {
  uploadedFile: File | null;
  setUploadedFile: any;
  setReviewNumber: any;
  setReviewPercentage: any;
  setReviewAverageProbability: any;
  setIsApiCalling: any;
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsButtonClicked(false);
    props.setIsApiCalling(false);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      props.setUploadedFile(file);
    }
  };

  const handleOnClick = () => {
    setIsButtonClicked(true);
    getBulkReviewAnalysis();
  };

  const getBulkReviewAnalysis = async () => {
    props.setIsApiCalling(true);
    try {
      if (props.uploadedFile) {
        const fileData = new FormData();
        fileData.append("file", props.uploadedFile);
        const res = await appClient.post(
          ApiConstant.GET_BULK_REVIEW_RESULT,
          fileData
        );
        props.setReviewNumber(res.data.result.reviewNumber);
        props.setReviewPercentage(res.data.result.reviewPercentage);
        props.setReviewAverageProbability(
          res.data.result.reviewAverageProbability
        );
      }
      props.setIsApiCalling(false);
    } catch {
      props.setIsApiCalling(false);
      setIsButtonClicked(false);
      ToastErrorMessage("api failed");
    }
  };

  return (
    <div className="p-3 border rounded-md shadow-md bg-white">
      <div className="grid grid-cols-1 gap-3">
        <BoxHeading label="UPLOAD FILE" />
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border cursor-pointer"
        />
        <Warnings label="&#8226; CSV file must contain a 'review_text' column" />
        <Warnings label="&#8226; JSON file must contain a 'reviews' key with a list of review texts" />
        <Warnings label="&#8226; Text file must contains reviews start with new line" />
        <button
          onClick={handleOnClick}
          className={`block mt-2 px-6 py-2 rounded-full text-white font-semibold bg-green-500 ${
            isButtonClicked ? "cursor-not-allowed" : "hover:bg-green-600"
          }`}
          disabled={isButtonClicked}
        >
          Analyze
        </button>
      </div>
    </div>
  );
};

export default BulkAnalyzeInput;
