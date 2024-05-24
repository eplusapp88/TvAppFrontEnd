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
import { viewProgram, deleteProgram } from "../../states/actions/programAction";
import ProgramModal from "../../components/modal/popup-model";
import AddProgram from "./AddProgram";
import UpdateProgram from "./UpdateProgram";

const ViewProgram = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const program = useSelector((state) => state.program);
  // use effect
  useEffect(() => {
    dispatch(viewProgram());
  }, []);
  const [showProgramAdd, setShowProgramAdd] = useState(false);
  const [showProgramUpdate, setShowProgramUpdate] = useState(false);

  const handleUpdateProgram = (data) => {
    setShowProgramUpdate(true);
  };

  function handleRemoveProgram(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteProgram(data.id));
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
          <Typography variant="h6">Programs</Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "5px" }}
            onClick={() => setShowProgramAdd(true)}
          >
            Add Program
          </Button>
        </Box>
        {program?.program ? (
          <Table
            data={program?.program}
            fields={programColumns}
            numberOfRows={program?.program?.length}
            enableTopToolBar={true}
            enableBottomToolBar={true}
            enablePagination={true}
            enableRowSelection={true}
            enableColumnFilters={true}
            enableEditing={true}
            enableColumnDragging={true}
            showPreview={true}
            deleteFunction={handleRemoveProgram}
            upDatefunction={handleUpdateProgram}
          />
        ) : (
          <Loading />
        )}
      </Box>
      <ProgramModal
        isVisible={showProgramAdd}
        onClose={() => setShowProgramAdd(false)}
      >
        <AddProgram />
      </ProgramModal>
      <ProgramModal
        isVisible={showProgramUpdate}
        onClose={() => setShowProgramUpdate(false)}
      >
        <UpdateProgram />
      </ProgramModal>
      <ToastContainer />
    </Layout>
  );
};

export default ViewProgram;

export const programColumns = [
  {
    accessorKey: "id", //access nested data with dot notation
    header: "Id",
  },
  {
    accessorKey: "title", //access nested data with dot notation
    header: "Title",
  },
  {
    accessorKey: "duration", //access nested data with dot notation
    header: "Duration",
  },
  {
    accessorKey: "description", //access nested data with dot notation
    header: "Description",
  },
];
