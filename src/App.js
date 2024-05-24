import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./adminPages/Dashboard";

import {
  AddUser,
  UpdateUser,
  ViewUser,
  CreateChannel,
  UpdateChannel,
  ViewChannel,
  AddProgram,
  UpdateProgram,
  ViewProgram,
  Login,
} from "./adminPages";

import Home from "./userPage/pages/home/home";
import Movies from "./userPage/pages/movies/movie_home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<AddUser />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/addUsers" element={<AddUser />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
        <Route path="/allUsers" element={<ViewUser />} />
        <Route path="/addProgram" element={<AddProgram />} />
        <Route path="/updateProgram/:id" element={<UpdateProgram />} />
        <Route path="/viewProgram" element={<ViewProgram />} />
        <Route path="/createChannel" element={<CreateChannel />} />
        <Route path="/updateChannel/:id" element={<UpdateChannel />} />
        <Route path="/viewChannel" element={<ViewChannel />} />
      </Routes>
    </>
  );
}

export default App;
