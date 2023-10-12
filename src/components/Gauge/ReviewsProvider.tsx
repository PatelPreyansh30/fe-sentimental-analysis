import React, { useState, useEffect } from 'react';
import { ReviewsProviderProps } from '@/utils/types';


const ReviewsProvide = (props: ReviewsProviderProps) => {
  const [value, setValue] = useState<number>(props.valueStart);

  useEffect(() => {
    setValue(props.valueEnd);
  }, [props.valueEnd]);

  return <>{props.children(value)}</>;
};

export default ReviewsProvide;
