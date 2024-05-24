import { configureStore } from "@reduxjs/toolkit";

import channelReducer from "../states/reducers/channelReducer";
import programReducer from "../states/reducers/programReducer";
import userReducer from "../states/reducers/userReducer";

const store = configureStore({
  reducer: {
    channel: channelReducer,
    program: programReducer,
    user: userReducer,
  },
});

export default store;
