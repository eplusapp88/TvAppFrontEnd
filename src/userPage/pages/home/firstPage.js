import React from "react";
import { LogoImg } from "../../../assets";
import { useNavigate } from "react-router-dom";
const FirstPage = () => {
  const navigate = useNavigate();
  const handleNavigateAdmin = () => {
    navigate("/login");
  };

  return (
    <>
      <section class="relative bg-banner2 md:bg-banner bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
          <header className="w-full pt-8 md:pt-20">
            <div className="w-full flex justify-between items-center mx-auto px-6">
              <div className="md:hidden flex">
                <img src={LogoImg} className="w-12" />
              </div>
              <div className="hidden md:flex items-center gap-4">
                <h2 className=" font-serif text-center text-4xl font-black text-white">
                  HBO
                </h2>
              </div>

              <div className="flex items-center gap-4 space-x-6">
                <p className="text-white font-bold text-sm md:text-lg">
                  5:30PM
                </p>
                <span className="flex text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 md:w-6 text-white"
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
                    className="w-6 md:w-8 -ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                  18*
                </span>
                <div
                  className={`flex relative justify-center items-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full p-[2px] cursor-pointer`}
                >
                  <div className="flex justify-center items-center flex-col bg-[#555F7A]  w-[100%] h-[100%] rounded-full">
                    <div className={`flex justify-center items-start flex-row`}>
                      <button className="font-poppins font-medium text-[12px] leading-[23.4px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 md:w-6 text-[#a1a2ad]"
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
                  className={`hidden md:flex relative justify-center items-center w-[60px] h-[60px] rounded-full p-[2px] cursor-pointer z-10`}
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
        </div>

        <div class="relative mx-auto max-w-screen-xl px-2 py-4 md:py-40 sm:px-3 lg:flex h-screen lg:px-4">
          <div class="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right pt-52 md:pt-0">
            <h2 className="flex md:hidden font-serif text-4xl font-black text-white">
              HBO
            </h2>
            <p class="mt-4 max-w-lg text-sm/relaxed md:text-lg/relaxed text-[#696C8F]">
              Now Playing
            </p>
            <h1 class="block md:text-4xl font-bold text-xl text-white">
              {" "}
              Grey`s Anatomy
            </h1>

            <p class="mt-4 max-w-md text-lg/relaxed md:text-xl/relaxed text-[#696C8F]">
              Grey`s Anatomy is an American medical drama television series that
              perimarred on March 27, 2005 on ABC mid-season as a mid-season
              replacement.
            </p>

            <div class=" mt-16 max-w-lg sm:text-xl/relaxed">
              <div class="space-y-2">
                <div className="relative flex px-2">
                  <div class="w-full">
                    <div class="bg-[#b9b9bd] transition-all duration-500 rounded-full overflow-hidden">
                      <div
                        class="bg-white transition-all duration-500 w-1/2 h-2"
                        role="progressbar"
                        aria-label="music progress"
                        aria-valuenow="1456"
                        aria-valuemin="0"
                        aria-valuemax="4550"
                      ></div>
                    </div>
                    <div class="ring-white transition-all duration-500 ring-2 absolute left-1/2 top-1/2 w-4 h-4 md:-mt-5 -mt-1 md:-ml-6 -ml-1 flex items-center justify-center bg-white rounded-full shadow">
                      <div class="w-1.5 h-1.5 bg-cyan-500 transition-all duration-500 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-14 h-14 -mt-6 hidden md:flex"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      className="text-white"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="white"
                      className="text-white"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </div>
                <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
                  <div class="text-white transition-all duration-500">
                    24:16
                  </div>
                  <div class="text-white transition-all duration-500">
                    01:32:28
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FirstPage;
