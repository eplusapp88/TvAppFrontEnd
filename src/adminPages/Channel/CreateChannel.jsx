import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { registerChannel } from "../../states/actions/channelAction";

const CreateChannel = () => {
  const dispatch = useDispatch();

  // use form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // on submit
  const onSubmit = (data) => {
    // dispatch
    dispatch(registerChannel(data));
  };
  return (
    <>
      <div className="relative px-4 pb-4 pt-4 md:pt-0">
        <div className="p-6 pt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="font-display flex flex-col justify-center items-center">
              <h2 className="my-4  font-bold text-secondary text-xl lg:text-4xl text-gray-700 text-center">
                Add Channel
              </h2>
              <div className="w-full grid md:grid-cols-1 gap-x-4">
                <div className="">
                  <div className="mb-4 w-full">
                    <span className="block text-lg font-display text-inputColor">
                      Title
                    </span>
                    <input
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                      className="w-full px-4 py-2 text-base text-black bg-gray-200 border-b-2 border-solid border-gray-600 rounded"
                    />
                    {errors.title && (
                      <p className="text-red-500">incorect title</p>
                    )}
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
                      Add
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
export default CreateChannel;
