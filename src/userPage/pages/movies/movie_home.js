import React from "react";
import Movie_header from "./movie_header";
import { Divider } from "@mui/material";
const Movies = () => {
  return (
    <>
      <div className="w-full mx-auto flex flex-wrap bg-[#0F102E]">
        <Movie_header />

        <div className="flex py-12 w-full">
          <div className="hidden grow-0 shrink-0 basis-auto w-full md:w-2/12 xl:w-2/12 md:flex flex-col justify-around  items-center">
            <div className="space-y-12">
              <div
                className={`flex relative justify-center items-center w-[80px] h-[80px] rounded-full p-[2px] cursor-pointer`}
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
                        class="w-8 h-8"
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
                className={`flex relative justify-center items-center w-[80px] h-[80px] rounded-full p-[2px] cursor-pointer`}
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
                        class="w-8 h-8"
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
                className={`flex relative justify-center items-center w-[80px] h-[80px] rounded-full p-[2px] cursor-pointer`}
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
                        class="w-8 h-8"
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

          <div className="grow-0 shrink-0 basis-auto w-full md:w-10/12 xl:w-10/12 bg-[#0F102E]">
            <div
              style={{}}
              className=" md:flex flex-wrap justify-start items-center mx-auto md:px-6 lg:px-6 px-1 w-full"
            >
              <div className="flex items-center  space-x-8 w-full">
                <button className="text-white hover:text-primary text-lg mb-5 flex items-center justify-center md:justify-start ">
                  Rcommended
                </button>

                <button className="text-[#a1a2ad] text-lg mb-5 flex items-center justify-center md:justify-start ">
                  Popular
                </button>
                <button className="text-[#a1a2ad] text-lg mb-5 flex items-center justify-center md:justify-start ">
                  Featured
                </button>
              </div>
              <Divider color="#f5f5f7" sx={{ height: 4, width: "62px" }} />
              <Divider color="#1e1e30" sx={{ height: 3, width: "100%" }} />
            </div>

            <div class="grid lg:grid-cols-4 xl:gap-5 md:gap-6 xl:gap-x-4 py-6 mb-24">
              <div>
                <div class="flex max-w-sm w-full shadow-md rounded-lg overflow-hidden">
                  <div
                    class="overflow-hidded relative shadow-lg w-full"
                    data-movie-id="438631"
                  >
                    <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-80"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              The Hunger Game
                            </h3>
                          </div>

                          <div className="md:hidden absolute flex md:flex-row flex-col md:left-6 right-2 top-4  transition-[1s] -translate-x-0 md:space-x-6 space-y-6">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:flex md:flex-row flex-col transition-[1s] -translate-x-0 space-x-6 py-4">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          2h 34m
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="flex max-w-sm w-full shadow-md rounded-lg overflow-hidden">
                  <div
                    class="overflow-hidded relative shadow-lg w-full"
                    data-movie-id="438631"
                  >
                    <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-80"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              Jumanji
                            </h3>
                          </div>

                          <div className="md:hidden absolute flex md:flex-row flex-col md:left-6 right-2 top-4  transition-[1s] -translate-x-0 md:space-x-6 space-y-6">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:flex md:flex-row flex-col transition-[1s] -translate-x-0 space-x-6 py-4">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          2h 34m
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div class="flex max-w-sm w-full shadow-md rounded-lg overflow-hidden">
                  <div
                    class="overflow-hidded relative shadow-lg w-full"
                    data-movie-id="438631"
                  >
                    <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-80"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              Godzilla VS King Kong
                            </h3>
                          </div>

                          <div className="md:hidden absolute flex md:flex-row flex-col md:left-6 right-2 top-4  transition-[1s] -translate-x-0 md:space-x-6 space-y-6">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:flex md:flex-row flex-col transition-[1s] -translate-x-0 space-x-6 py-4">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          3h 18m
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="flex max-w-sm w-full shadow-md rounded-lg overflow-hidden">
                  <div
                    class="overflow-hidded relative shadow-lg w-full"
                    data-movie-id="438631"
                  >
                    <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-80"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              Jurassic
                            </h3>
                          </div>

                          <div className="md:hidden absolute flex md:flex-row flex-col md:left-6 right-2 top-4  transition-[1s] -translate-x-0 md:space-x-6 space-y-6">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="hidden md:flex md:flex-row flex-col transition-[1s] -translate-x-0 space-x-6 py-4">
                            <div class="flex flex-col datos_col">
                              <div class="popularity">
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
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
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="flex flex-col datos_col">
                              <div class="release">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-8 text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          1h 54m
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Movies;
