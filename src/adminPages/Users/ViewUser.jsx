import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Avatar } from "@mui/material";
import Layout from "../../adminPages/layout/Layout";
import Loading from "../loading/Loading";
import { viewUser, deleteUser } from "../../states/actions/userAction";

const ViewUser = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const user = useSelector((state) => state.user);
  // use effect
  useEffect(() => {
    dispatch(viewUser());
  }, []);

  const navigate = useNavigate();

  const handleUpdateUser = (data) => {
    navigate("/updateUser/" + data.id);
  };

  function handleRemoveUser(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteUser(data.id));
    }
    setTimeout(function () {
      window.location.reload();
    }, 500);
  }

  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h6">Add Users</Typography>
          <Link to="/newUser" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              All User
            </Button>
          </Link>
        </Box>
        {user?.user ? (
          <Table
            data={user?.user}
            fields={userColumns}
            numberOfRows={user?.user?.length}
            enableTopToolBar={true}
            enableBottomToolBar={true}
            enablePagination={true}
            enableRowSelection={true}
            enableColumnFilters={true}
            enableEditing={true}
            enableColumnDragging={true}
            showPreview={true}
            deleteFunction={handleRemoveUser}
            upDatefunction={handleUpdateUser}
          />
        ) : (
          <Loading />
        )}
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default ViewUser;

export const userColumns = [
  {
    accessorKey: "photo", //access nested data with dot notation
    header: "Images",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar
          src={`http://localhost:3008${cell.getValue()}`}
          sx={{ width: 30, height: 30 }}
        />
      </div>
    ),
  },
  {
    accessorKey: "firstName", //access nested data with dot notation
    header: "First Name",
  },
  {
    accessorKey: "lastName", //access nested data with dot notation
    header: "Last Name",
  },
  {
    accessorKey: "email", //access nested data with dot notation
    header: "Email",
  },
];
