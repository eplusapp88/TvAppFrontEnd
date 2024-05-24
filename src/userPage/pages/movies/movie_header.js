import React from "react";
import { useNavigate } from "react-router-dom";

const Movie_header = () => {
  const navigate = useNavigate();

  const handleNavigateProgram = () => {
    navigate("/");
  };

  const handleNavigateAdmin = () => {
    navigate("/login");
  };
  return (
    <>
      <header className="w-full pt-8 md:pt-28">
        <div className="w-full flex justify-between items-center mx-auto px-2 md:px-12">
          <div className="flex items-center space-x-2 md:space-x-12">
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#222247] w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <button
                    className="font-poppins font-medium text-[12px] leading-[23.4px]"
                    onClick={handleNavigateProgram}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 md:w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <h2 className=" font-serif text-center text-lg md:text-3xl font-midum text-white">
              Movies
            </h2>
          </div>
          <div className="flex items-center gap-4 space-x-6">
            <span className="hidden md:flex text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 -ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                />
              </svg>
              18*
            </span>
            <p className="hidden md:flex text-[#a1a2ad] font-bold text-lg">
              5:30PM
            </p>
            <p className="hidden md:flex text-[#a1a2ad] font-bold text-sm">
              Tursday, Apr 4
            </p>
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#222247] w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <button className="font-poppins font-medium text-[12px] leading-[23.4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 md:w-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button
              className={`flex relative justify-center items-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full p-[2px] cursor-pointer`}
              onClick={handleNavigateAdmin}
            >
              <img
                class="h-full w-full rounded-full m-auto my-4"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt=""
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Movie_header;
