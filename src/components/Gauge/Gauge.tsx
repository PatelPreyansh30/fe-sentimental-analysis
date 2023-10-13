import React from 'react';
import ReviewsProvider from './ReviewsProvider';
import { GaugePropsTypes } from '@/utils/types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Gauge = (props: GaugePropsTypes) => {
  const { value, sentimentType } = props;

  // function for calculating the color
  const calcColor = (sentiment: string) => {
    if (sentiment === 'Positive') {
      return "hsl(142, 70.6%, 45.3%)";
    }
    else if (sentiment === 'Negative') {
      return "hsl(0, 84.2%, 60.2%)";
    }
    else if (sentiment === 'Neutral') {
      return "hsl(217, 91.2%, 59.8%)";
    }
  };

  return (
    <ReviewsProvider valueStart={0} valueEnd={value}>
      {(value: number) => (
        <div className='flex items-center justify-center w-full'>
          <div className='w-[250px] h-[250px] m-3 p-3 bg-white'>
            <CircularProgressbar
              value={value}
              text={`${value}% `}
              circleRatio={0.7} // 0.7 default
              styles={{
                trail: {
                  strokeLinecap: 'butt',
                  transform: 'rotate(-126deg)', // -126deg default
                  transformOrigin: 'center center',
                },
                path: {
                  strokeLinecap: 'butt',
                  transform: 'rotate(-126deg)',
                  transformOrigin: 'center center',
                  stroke: calcColor(sentimentType),
                },
                text: {
                  fill: '#000',
                },
              }}
              strokeWidth={7}
            />
          </div>
        </div>
      )}
    </ReviewsProvider>
  );
};

export default Gauge;