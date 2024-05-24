import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import {
  singleProgram,
  updateProgram,
} from "../../states/actions/programAction";

const UpdateProgram = () => {
  // dispatch
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  // useSelectors
  const { id } = useParams();
  // use effect
  useEffect(() => {
    dispatch(singleProgram(id));
  }, []);
  // on submit
  const onSubmit = (data) => {
    // dispatch
    dispatch(updateProgram(data));
  };
  return (
    <>
      <div className="relative px-4 pb-4 pt-4 md:pt-0">
        <div className="p-6 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="font-display flex flex-col justify-center items-center">
              <h2 className="my-4  font-bold text-secondary text-xl lg:text-4xl text-gray-700 text-center">
                Update Program
              </h2>
              <div className="w-full grid md:grid-cols-2 gap-x-4">
                <div className="">
                  <div className="mb-4 w-full">
                    <span className="block text-lg font-display text-inputColor">
                      Video url
                    </span>
                    <input
                      type="text"
                      {...register("url", {})}
                      className="w-full px-4 py-2 text-base text-black bg-gray-200 border-b-2 border-solid border-gray-600 rounded"
                    />
                    {errors.videoUrl && (
                      <p className="text-red-500">invalid URL</p>
                    )}
                  </div>
                  <div className="mb-2 w-full">
                    <span className="block text-lg font-display text-inputColor">
                      Duration
                    </span>
                    <input
                      type="text"
                      {...register("duration", {})}
                      className="w-full px-4 py-2 text-base text-black bg-gray-200 border-b-2 border-solid border-gray-600 rounded"
                    />
                    {errors.duration && (
                      <p className="text-red-500">incorect duration</p>
                    )}
                  </div>

                  <div className="mb-2 w-full">
                    <span className="block text-lg font-display text-inputColor">
                      Channel
                    </span>
                    <select
                      id="category"
                      className="w-full px-4 py-2 text-base text-black bg-gray-200 border-b-2 border-solid border-gray-600 rounded"
                      {...register("status", {})}
                    >
                      <option className="p-2 text-md">CNN Tv</option>
                      <option className="p-2 text-md">BHO Tv</option>
                      <option className="p-2 text-md">ABC Tv</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="mb-4 w-full">
                    <span className="block text-lg font-display text-inputColor">
                      Title
                    </span>
                    <input
                      type="text"
                      {...register("title", {})}
                      className="w-full px-4 py-2 text-base text-black bg-gray-200 border-b-2 border-solid border-gray-600 rounded"
                    />
                    {errors.title && (
                      <p className="text-red-500">incorect title</p>
                    )}
                  </div>
                  <div className="mb-2 w-full">
                    <span className="block text-lg font-display text-inputColor">
                      Category
                    </span>
                    <select
                      id="category"
                      className="w-full px-4 py-2 text-base text-black bg-gray-200 border-b-2 border-solid border-gray-600 rounded"
                    >
                      <option className="p-2 text-md">category 1</option>
                      <option className="p-2 text-md">category 2</option>
                      <option className="p-2 text-md">category 3</option>
                    </select>
                  </div>
                  <div className="mb-2 w-full">
                    <span className="block text-lg font-display text-inputColor">
                      Type
                    </span>
                    <select
                      id="category"
                      className="w-full px-4 py-2 text-base text-black bg-gray-200 border-b-2 border-solid border-gray-600 rounded"
                      {...register("description", {})}
                    >
                      <option className="p-2 text-md">type 1</option>
                      <option className="p-2 text-md">type 2</option>
                      <option className="p-2 text-md">type 3</option>
                    </select>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      className="inline-block px-2 py-1 mt-6  text-black font-medium text-lg leading-snug rounded border-2 border-gray-500 w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="inline-block px-2 py-1 mt-6 bg-[#441e69] text-white font-medium text-lg leading-snug rounded  focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UpdateProgram;
export const passengerColumns = [
  {
    accessorKey: "seatNumber",
    header: "Seat Number",
  },
  {
    accessorKey: "reservationDate",
    header: "Reservation Date",
  },
];
