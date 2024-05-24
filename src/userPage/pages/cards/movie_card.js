import React from "react"
import {robot} from "../../../assets/index";
const Movie_card =()=>{
    return(
        <>
        <div className="bg-[#E3E6E6]">
        <div className="w-11/12 xl:w-11/12 mx-auto pb-6">
          <section className="mb-6 text-gray-800 text-center ">
            <div
              style={{}}
              className=" md:flex flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1"
            >
              <div className="flex items-center py-3">
                <button className="mr-6 text-lg font-display text-[#0397FF] font-medium hover:text-black">
                  E+up
                </button>
              </div>
              <div className="hidden md:flex items-center py-3">
                <button className="mr-6 text-lg font-display text-[#0397FF] font-medium hover:text-black">
                  E+up
                </button>
              </div>
              <div className="hidden md:flex items-center py-3">
                <button className="mr-6 text-lg font-display text-[#0397FF] font-medium hover:text-black">
                  E+up
                </button>
              </div>

            </div>

            <div class="grid lg:grid-cols-4 xl:gap-5 md:gap-6 xl:gap-x-4">
       
                      <div className="mb-6 lg:mb-0">
                      <a href="#" class="group relative block bg-black">
        <img
          alt=""
          src={robot}
          class="absolute inset-0 w-screen h-72 object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div class="relative p-4 sm:p-6 lg:p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
            Developer
          </p>

          <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

          <div class="mb-4">
            <div class="translate-y-8 transform opacity-10 transition-all">
              <p class="text-sm text-white">
                Lorem ipsum dolor
              </p>
            </div>
          </div>
        </div>
      </a>
                      </div>
                    

            </div>
          </section>
        </div>
      </div>
        </>
    );
}
export default Movie_card;