import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { LogoImg } from "../../assets";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (employeeData) => {
    console.log(employeeData);
    const formData = new FormData();
    Object?.entries(employeeData).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    //  dispatch(registerEmployee(newData));
  };
  const handleNavigateAdmin = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <section class="gradient-form h-screen bg-neutral-200">
        <div class="h-full">
          <div class="flex h-full flex-wrap items-center justify-center text-neutral-800">
            <div class="h-full w-full g-0 lg:flex lg:flex-wrap">
              <div class="w-full flex items-center justify-center lg:w-6/12 bg-[#0F102E] py-8">
                <div class="text-center">
                  <img src={LogoImg} className="m-4" />
                  <h1 class="text-5xl font-extrabold text-white">T-Movie</h1>
                </div>
              </div>
              <div class="px-4 md:px-0 lg:w-6/12">
                <div class="md:mx-6 md:p-12 mt-12 md:mt-32">
                  <div class="text-center">
                    <h4 class="mb-12 mt-1 pb-1 md:text-5xl text-xl font-bold md:font-extrabold text-black">
                      LOGIN
                    </h4>
                  </div>

                  <form>
                    <div>
                      <div class="relative flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#bbb"
                          stroke="#bbb"
                          class="w-[18px] h-[18px] absolute left-1"
                          viewBox="0 0 682.667 682.667"
                        >
                          <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                              <path
                                d="M0 512h512V0H0Z"
                                data-original="#000000"
                              ></path>
                            </clipPath>
                          </defs>
                          <g
                            clip-path="url(#a)"
                            transform="matrix(1.33 0 0 -1.33 0 682.667)"
                          >
                            <path
                              fill="none"
                              stroke-miterlimit="10"
                              stroke-width="40"
                              d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                              data-original="#000000"
                            ></path>
                            <path
                              d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                              data-original="#000000"
                            ></path>
                          </g>
                        </svg>
                        <input
                          type="text"
                          required
                          class="w-full text-lg border-2 border-solid border-gray-400 focus:border-[#333]  px-8 py-2 outline-none rounded-lg"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div class="mt-4">
                      <div class="relative flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#bbb"
                          stroke="#bbb"
                          class="w-[18px] h-[18px] absolute left-1 cursor-pointer"
                          viewBox="0 0 128 128"
                        >
                          <path
                            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        <input
                          name="password"
                          type="password"
                          required
                          class="w-full text-lg border-2 border-solid border-gray-400 focus:border-[#333] px-8 py-2 rounded-lg"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>

                    <div class="mt-12">
                      <button
                        type="button"
                        class="w-full shadow-xl py-2 px-4 text-2xl font-semibold rounded-lg text-white bg-black focus:outline-none"
                        onClick={handleNavigateAdmin}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
export default Login;
