import { ApiConstant } from "@/constant/applicationConstant";
import appClient from "@/network/appClient";
import { joiUtils } from "@/utils/joiValidation";
import { ToastErrorMessage } from "@/utils/toastifyAlerts";
import { SessionReviewType } from "@/utils/types";
import { TextField } from "@mui/material";
import React, { useState } from "react";

const AnalyzeInput = (props: {
  sentence: string;
  setSentence: any;
  setIsApiCalling: any;
  setPercentage: any;
  setSentimentType: any;
  setSessionStorageReviews: any;
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsButtonClicked(false);
    props.setIsApiCalling(false);
    const { value } = e.currentTarget;
    props.setSentence(value);
  };

  const handleOnClick = () => {
    setIsButtonClicked(true);
    const result = joiUtils.validateReviewData(props.sentence);
    if (result.status) {
      getReviewAnalysis();
    } else {
      ToastErrorMessage(result.message);
    }
  };

  const getReviewAnalysis = async () => {
    props.setIsApiCalling(true);
    try {
      const res = await appClient.post(ApiConstant.GET_REVIEW_RESULT, {
        sentence: props.sentence,
      });
      const scaledProbabilitRounded = res.data.result.scaled_probability;
      props.setPercentage(Math.round(scaledProbabilitRounded));
      props.setSentimentType(res.data.result.type);

      // Setting new review in session storage
      let existingReview = sessionStorage.getItem("review");
      let reviewObjectList: { sentence: string; type: string }[] =
        existingReview ? JSON.parse(existingReview) : [];
      reviewObjectList.unshift({
        sentence: props.sentence,
        type: res.data.result.type,
      });
      let updatedReviewList = JSON.stringify(reviewObjectList);
      sessionStorage.setItem("review", updatedReviewList);

      // Setting new review in state
      props.setSessionStorageReviews((state: SessionReviewType[]) => [
        ...state.reverse(),
        { sentence: props.sentence, type: res.data.result.type },
      ]);

      props.setIsApiCalling(false);
    } catch {
      props.setIsApiCalling(false);
      setIsButtonClicked(false);
    }
  };

  return (
    <div>
      <TextField
        value={props.sentence}
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
    </div>
  );
};

export default AnalyzeInput;
