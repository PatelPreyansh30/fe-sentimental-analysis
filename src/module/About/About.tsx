import React from "react";
import { Avatar } from "@mui/material";
import AboutProject from "./AboutProject";

const memberInfo = [
  {
    name: "Preyansh Patel",
    enrollment: "200103061005",
    branch: "CE with AI-ML",
    profile: (
      <Avatar
        alt="Preyansh Patel"
        src="/preyansh.jpg"
        sx={{ width: 100, height: 100 }}
      />
    ),
  },
  {
    name: "Tarpit Patel",
    enrollment: "200103061006",
    branch: "CE with AI-ML",
    profile: (
      <Avatar
        alt="Tarpit Patel"
        src="/tarpit.jpg"
        sx={{ width: 100, height: 100 }}
      />
    ),
  },
  {
    name: "Rushikesh Falak",
    enrollment: "200103062013",
    branch: "CE with AI-ML",
    profile: (
      <Avatar
        alt="Rushikesh Falak"
        src="/rushikesh.jpg"
        sx={{ width: 100, height: 100 }}
      />
    ),
  },
  {
    name: "Sahil Maurya",
    enrollment: "200103061003",
    branch: "CE with AI-ML",
    profile: (
      <Avatar
        alt="Sahil Maurya"
        src="/sahil.jpg"
        sx={{ width: 100, height: 100 }}
      />
    ),
  },
];

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <AboutProject />
      <div className="grid grid-cols-4 gap-4">
        {memberInfo.map((item, index) => (
          <div
            className="p-4 flex flex-col items-center border rounded-md shadow-md bg-white"
            key={`about-us-member-info-index:${index}`}
          >
            {item.profile}
            <p className="my-2 text-xl font-semibold">{item.name}</p>
            <p>{item.enrollment}</p>
            <p>{item.branch}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
