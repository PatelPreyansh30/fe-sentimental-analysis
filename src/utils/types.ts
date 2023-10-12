// Types decraled here
import { ReactNode } from 'react';

export interface GaugePropsTypes {
    value: number;
    sentimentType: string
}

export interface ReviewsProviderProps {
    valueStart: number;
    valueEnd: number;
    children: (value: number) => ReactNode;
  }