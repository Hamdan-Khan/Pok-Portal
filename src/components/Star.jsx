import React from "react";

const Star = ({ toggle }) => {
  return (
    <svg
      aria-hidden="true"
      className={`w-7 h-7 text-yellow-400`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`${toggle ? "rgb(250 204 21)" : "none"}`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M12 2L15.09 8.45L22 9.27L17 14.35L18.18 21L12 18.18L5.82 21L7 14.35L2 9.27L8.91 8.45L12 2Z"
      />
    </svg>
  );
};

export default Star;
