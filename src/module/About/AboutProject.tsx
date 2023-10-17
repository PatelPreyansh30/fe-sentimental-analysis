import React from "react";

const AboutProject = () => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <p className="mb-3 text-2xl text-center font-semibold">About Project</p>
      <p className="text-gray-600">
        {`Welcome to our sentiment analysis project(emovibe analysis)! At its core,
      our project is designed to provide users with a powerful tool for
      understanding and categorizing the sentiment within textual reviews.
      Whether you're looking to gauge the public perception of a single review
      or analyze a multitude of reviews from various file formats such as txt,
      json, or csv, our trained model is here to assist you. Our model has
      undergone extensive training on a vast dataset, primarily sourced from
      Amazon reviews. With approximately 8.4 lakh data points, it's
      well-equipped to distinguish between three fundamental sentiment
      categories: positive, negative, and neutral. By harnessing the collective
      wisdom of these reviews, we offer an invaluable resource for individuals,
      businesses, and researchers looking to gain deeper insights into the world
      of customer feedback. We take pride in offering a user-friendly platform
      that makes sentiment analysis accessible and informative. Whether you're a
      data enthusiast, a market analyst, or a business owner seeking to enhance
      your products or services, our project can provide you with the valuable
      insights you need to make informed decisions. We are committed to
      continuously improving our service and ensuring that our users can harness
      the power of sentiment analysis to its fullest potential. Thank you for
      choosing us as your sentiment analysis partner. We look forward to
      assisting you in unraveling the emotions and opinions embedded within the
      vast sea of text.`}
      </p>
    </div>
  );
};

export default AboutProject;
