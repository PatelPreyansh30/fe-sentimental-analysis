import React from "react";

const AboutProject = () => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white leading-7">
      <p className="mb-3 text-2xl text-center font-semibold">About Project</p>
      <p className="mb-2 text-gray-600">
        EmoVibe is a powerful sentiment analysis system that uses machine
        learning to identify the emotional tone of text. It is powered by a
        model trained on 8.4 lakh reviews, and can be used to analyze both
        single reviews and multiple reviews at once. EmoVibe is easy to use,
        even for users with no prior experience with sentiment analysis. Simply
        enter the text you want to analyze and EmoVibe will generate a sentiment
        score, ranging of 0 to 100 in class of positive, negative and neutral.
        You can also upload a CSV, JSON, or TXT file containing multiple reviews
        to analyze them all at once. EmoVibe is accurate and reliable, thanks to
        its model trained on a large corpus of data. It is also fast and
        scalable, so it can be used to analyze even large datasets quickly.
      </p>
      <div className="mb-2 text-gray-600">
        <p>
          EmoVibe is versatile and can be used for a variety of purposes, such
          as:
        </p>
        <ul className="ml-4 list-item list-disc">
          <li>
            Analyzing customer feedback to identify areas where products or
            services can be improved
          </li>
          <li>
            Monitoring social media to track public sentiment towards a brand or
            product
          </li>
          <li>Identifying trends in public opinion</li>
          <li>Conducting market research</li>
          <li>Understanding the emotional tone of customer support tickets</li>
          <li>Analyzing employee feedback surveys</li>
          <li>Identifying potential problems with new product launches</li>
        </ul>
      </div>
      <div className="mb-2 text-gray-600">
        <p>
          EmoVibe is a valuable tool for any business or organization that wants
          to better understand their customers and the public perception of
          their brand.
        </p>
        <p>Here are some specific examples of how EmoVibe can be used:</p>
        <ul className="ml-4 list-item list-disc">
          <li>
            A company that sells e-commerce products can use EmoVibe to analyze
            customer reviews of their products to identify areas where they can
            improve their products or services.
          </li>
          <li>
            A social media marketing team can use EmoVibe to track public
            sentiment towards their brand to identify any potential problems or
            opportunities.
          </li>
          <li>
            A political campaign can use EmoVibe to identify trends in public
            opinion and to target their messaging accordingly.
          </li>
          <li>
            A market research firm can use EmoVibe to analyze customer feedback
            surveys to gain insights into customer needs and preferences.
          </li>
          <li>
            A customer support team can use EmoVibe to analyze customer support
            tickets to identify potential problems and to improve their customer
            service.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProject;
