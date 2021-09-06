import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="bg-white flex justify-center items-center m-6">
      <div className="max-w-xs container bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
            {data.display.flag}
          </span>
          <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
            {data.display.displayName}
          </h1>
          <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
            {data.recipeType[0]}
          </p>
        </div>
        <img
          className="w-full cursor-pointer"
          src={data.display.images[0]}
          alt=""
        />
        <div className="flex p-4 justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="w-10 rounded-full"
              src={data.display.images[0]}
              alt="sara"
            />
            <h2 className="text-gray-800 font-bold cursor-pointer">
              {data.type}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-gray-600 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
              <span>{data.content.reviews.totalReviewCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
