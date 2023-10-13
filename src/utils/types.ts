// Types decraled here
import { ReactNode } from "react";

export interface SessionReviewType {
  sentence: string;
  type: string;
}

export interface GaugePropsTypes {
  value: number;
  sentimentType: string;
}

export interface ReviewsProviderProps {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => ReactNode;
}
