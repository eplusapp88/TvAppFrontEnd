// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";
//List all program
export const viewProgram = createAsyncThunk("program", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/programs`);
    if (response.status === 200) {
      return response.data;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError("loading...");
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
//Add new program
export const registerProgram = createAsyncThunk(
  "program",
  async (programData, thunkAPI) => {
    try {
      console.log("program info : ", programData);
      //response
      let response = await axios.post(`${BaseUrl}/programs`, programData);

      //condition
      if (response.status === 201) {
        handleSuccess("Register successfull!");
        return response.data.program;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const singleProgram = createAsyncThunk(
  "program",
  async (id, thunkAPI) => {
    try {
      // response
      let response = await axios.get(`${BaseUrl}/programs/${id}`, id);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError("search program history...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
// update program
export const updateProgram = createAsyncThunk(
  "program",
  async (programData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/programs/${programData.id}`,
        programData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change data successfull");
        return response.data.program;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
// delete program
export const deleteProgram = createAsyncThunk(
  "program",
  async (id, thunkAPI) => {
    try {
      //respone
      let response = await axios.delete(`${BaseUrl}/programs/${id}`, id);
      //conditoon
      if (response.status === 200) {
        handleSuccess("Delete successfull!");
        return response.data.program;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
