// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";
//List all Channel
export const viewChannel = createAsyncThunk("channel", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/channels`);
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
//Add new Channel
export const registerChannel = createAsyncThunk(
  "channel",
  async (channelData, thunkAPI) => {
    try {
      console.log("channel data : ", channelData);
      //response
      let response = await axios.post(`${BaseUrl}/channels`, channelData);

      //condition
      if (response.status === 201) {
        handleSuccess("Register successfull!");
        return response.data.channel;
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

export const singleChannel = createAsyncThunk(
  "channel",
  async (id, thunkAPI) => {
    try {
      // response
      let response = await axios.get(`${BaseUrl}/channels/${id}`, id);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError("search channel history...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
// update Channel
export const updateChannel = createAsyncThunk(
  "channel",
  async (channelData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/channels/${channelData.id}`,
        channelData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change data successfull");
        return response.data.channel;
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
// delete Channel
export const deleteChannel = createAsyncThunk(
  "channel",
  async (id, thunkAPI) => {
    try {
      //respone
      let response = await axios.delete(`${BaseUrl}/channels/${id}`, id);
      //conditoon
      if (response.status === 200) {
        handleSuccess("Delete successfull!");
        return response.data.channel;
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
