"use client";

import React, { useState } from "react";
import Loader from "@/components/Loader";
import BulkAnalyzeInput from "./BulkAnalyzeInput";

const BulkAnalyze = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isApiCalling, setIsApiCalling] = useState(false);

  return (
    <>
      {isApiCalling && <Loader />}
      <div>
        <BulkAnalyzeInput
          uploadedFile={uploadedFile}
          setUploadedFile={setUploadedFile}
          setIsApiCalling={setIsApiCalling}
        />
      </div>
    </>
  );
};

export default BulkAnalyze;
