import React from "react";
import FirstPage from "./firstPage";
import { LogoImg } from "../../../assets";
import Program from "../cards/program_card";

const Home = () => {
  return (
    <>
      <div className="w-full mx-auto flex md:flex-row flex-col-reverse bg-[#0F102E]">
        <div className="grow-0 shrink-0 basis-auto w-full md:w-2/12 xl:w-2/12 flex flex-col justify-around items-center">
          <div className="hidden md:flex">
            <img src={LogoImg} className="" />
          </div>
          <div className="flex flex-row md:flex-col py-6 md:space-y-12 gap-12 md:gap-1">
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#232556] w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 md:w-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#191A39] w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 md:w-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#191A39] w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="md:w-8 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flex-col program  */}
        <div className="grow-0 shrink-0 basis-auto w-full md:w-2/12 xl:w-2/12 flex flex-row md:flex-col justify-around mt-4 md:mt-0">
          <div className="hidden md:flex relative justify-start items-center space-x-6">
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042]  w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[12px] leading-[23.4px]">
                    <span className="text-gradient">FOX</span>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-[#28283b] font-bold text-xl">FOX TV</h1>
          </div>
          <div className="hidden md:flex relative justify-start items-center space-x-6">
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042] w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[12px] leading-[23.4px] bg-[#4F5063] rounded-full">
                    <span className="text-black p-1">abc</span>
                  </p>
                </div>
              </div>
            </div>
            <h1 className=" font-bold text-xl">ABC TV</h1>
          </div>
          <div className="flex flex-col md:flex-row relative justify-start items-center space-x-1 md:space-x-6">
            <div
              className={`flex relative justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042]  w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[8px] md:text-[12px] leading-[23.4px] border-solid border-1 md:border-2 border-[#4F5063]">
                    <span className="text-white">amc</span>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-[#9d9ea6] font-bold text-sm md:text-xl">
              AMC TV
            </h1>
          </div>
          <div className="flex flex-col md:flex-row relative justify-start items-center space-x-1 md:space-x-6">
            <div
              className={`flex relative justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042]  w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[12px] leading-[23.4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-[#e6e7f2] font-bold text-sm md:text-xl">
              NBC TV
            </h1>
          </div>

          <div className="flex flex-col md:flex-row relative justify-start items-center space-x-1 md:space-x-6">
            <div
              className={`flex relative justify-center items-center w-[90px] h-[90px] md:w-[140px] md:h-[140px] rounded-full p-[2px] cursor-pointer bg-[#232556]`}
            >
              <div
                className={`flex relative justify-center items-center w-[80px] h-[80px] md:w-[130px] md:h-[130px] rounded-full p-[6px] cursor-pointer bg-[#0F102E]`}
              >
                <div className="flex justify-center items-center flex-col bg-[#191A39] w-[100%] h-[100%] rounded-full">
                  <div className={`flex justify-center items-start flex-row`}>
                    <p className="font-poppins font-medium text-[12px] leading-[23.4px]">
                      <span className="text-lg md:text-4xl font-black text-white">
                        HBO
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="hidden md:flex text-4xl font-medium text-white">
              HBO
            </h1>
          </div>

          <div className="flex flex-col md:flex-row relative justify-start items-center space-x-1 md:space-x-6">
            <div
              className={`flex relative justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042]  w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[12px] leading-[23.4px]">
                    <span className="text-[#dadae3]">city</span>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-[#a1a2ad] font-bold text-sm md:text-xl">
              City TV
            </h1>
          </div>
          <div className="flex flex-col md:flex-row relative justify-start items-center space-x-1 md:space-x-6">
            <div
              className={`flex relative justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042] w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[8px] md:text-[12px] leading-[23.4px]">
                    <span className="text-[#a1a2ad]">ESPN</span>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="md:font-bold text-sm md:text-xl">ESPN TV</h1>
          </div>
          <div className="hidden md:flex relative justify-start items-center space-x-6">
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042]  w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[12px] leading-[23.4px]">
                    <span className="text-[#3c3d52]">diseny</span>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-[#3c3d52] font-bold text-xl">Diseny</h1>
          </div>
          <div className="hidden md:flex relative justify-start items-center space-x-6">
            <div
              className={`flex relative justify-center items-center w-[50px] h-[50px] rounded-full p-[2px] cursor-pointer`}
            >
              <div className="flex justify-center items-center flex-col bg-[#1e2042]  w-[100%] h-[100%] rounded-full">
                <div className={`flex justify-center items-start flex-row`}>
                  <p className="font-poppins font-medium text-[12px] leading-[23.4px]">
                    <span className="text-[#3c3d52]">CNN</span>
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-[#28283b] font-bold text-xl">CNN TV</h1>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-8/12 xl:w-8/12">
          <FirstPage />
        </div>
        <div className="absolute right-0 bottom-0">
          <Program />
        </div>
      </div>
    </>
  );
};
export default Home;
