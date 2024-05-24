import React from "react";
import { useNavigate } from "react-router-dom";

const Program = () => {
  const navigate = useNavigate();

  const handleNavigateChannel = () => {
    navigate("/movies");
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 flex justify-center items-center">
        <div
          className="overflow-hidden md:col-span-3 flex justify-center items-center"
          style={{
            flex: "0 0 100%",
          }}
        >
          <div className="gap-2 md:gap-8 flex justify-center items-center">
            <div
              className="w-full p-4 xl:px-6 rounded-lg shadow-shadowOne flex justify-center items-center flex-col bg-[#191A39]"
              onClick={handleNavigateChannel}
            >
              <div className="w-full h-[20%] md:h-[50%] overflow-hidden rounded-lg flex justify-center items-center flex-col bg-[#0F102E] p-4 md:p-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 md:w-24 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <div className="w-full mt-2 md:mt-12 flex flex-col  gap-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-sm md:text-2xl font-medium text-white">
                      Live TV`s
                    </h1>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 dark:text-gray-600 duration-300">
                    +5000 Channels
                  </p>
                </div>
              </div>
            </div>

            <div
              className="w-full p-4 xl:px-6 rounded-lg shadow-shadowOne flex justify-center items-center flex-col bg-[#191A39]"
              onClick={handleNavigateChannel}
            >
              <div className="w-full h-[20%] md:h-[50%] overflow-hidden rounded-lg flex justify-center items-center flex-col bg-[#0F102E] p-4 md:p-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 md:w-24 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                  />
                </svg>
              </div>
              <div className="w-full mt-2 md:mt-12 flex flex-col  gap-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-sm md:text-2xl font-medium text-white">
                      Movies
                    </h1>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 dark:text-gray-600 duration-300">
                    +500 sport channels
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full p-4 xl:px-6 rounded-lg shadow-shadowOne flex justify-center items-center flex-col bg-[#191A39]"
              onClick={handleNavigateChannel}
            >
              <div className="w-full h-[20%] md:h-[50%] overflow-hidden rounded-lg flex justify-center items-center flex-col bg-[#0F102E] p-4 md:p-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 md:w-24 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
              </div>
              <div className="w-full mt-2 md:mt-12 flex flex-col  gap-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-sm md:text-2xl font-medium text-white">
                      TV Shows
                    </h1>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 dark:text-gray-600 duration-300">
                    +900 series
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full p-4 xl:px-6 rounded-lg shadow-shadowOne hidden md:flex justify-center items-center flex-col bg-[#191A39]">
              <div className="w-full h-[20%] md:h-[50%] overflow-hidden rounded-lg flex justify-center items-center flex-col bg-[#0F102E] p-4 md:p-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 md:w-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <div className="w-full mt-2 md:mt-12 flex flex-col gap-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-sm md:text-2xl font-medium text-[#9d9ea6]">
                      Sports
                    </h1>
                  </div>
                  <p className="text-sm tracking-wide mt-3 hover:text-gray-100 dark:text-gray-600 duration-300">
                    +200 sport channels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
