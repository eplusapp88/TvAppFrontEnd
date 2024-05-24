import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
//import { Link } from "react-router-dom";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Avatar } from "@mui/material";
import Layout from "../../adminPages/layout/Layout";
import Loading from "../loading/Loading";
import { viewChannel, deleteChannel } from "../../states/actions/channelAction";
import ChannelModal from "../../components/modal/popup-model";
import CreateChannel from "./CreateChannel";
import UpdateChannel from "./UpdateChannel";

const ViewChannel = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const channel = useSelector((state) => state.channel);
  const [showChannelAdd, setShowChannelAdd] = useState(false);
  const [showChannelUpdate, setShowChannelUpdate] = useState(false);
  // use effect
  useEffect(() => {
    dispatch(viewChannel());
  }, []);

  const handleUpdateChannel = () => {
    setShowChannelUpdate(true);
  };

  function handleRemoveChannel(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteChannel(data.id));
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
          <Typography variant="h6">Channels</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "5px" }}
            onClick={() => setShowChannelAdd(true)}
          >
            Add Channel
          </Button>
        </Box>
        {channel?.channel ? (
          <Table
            data={channel?.channel}
            fields={channelColumns}
            numberOfRows={channel?.channel?.length}
            enableTopToolBar={true}
            enableBottomToolBar={true}
            enablePagination={true}
            enableRowSelection={true}
            enableColumnFilters={true}
            enableEditing={true}
            enableColumnDragging={true}
            showPreview={true}
            deleteFunction={handleRemoveChannel}
            upDatefunction={handleUpdateChannel}
          />
        ) : (
          <Loading />
        )}
      </Box>
      <ChannelModal
        isVisible={showChannelAdd}
        onClose={() => setShowChannelAdd(false)}
      >
        <CreateChannel />
      </ChannelModal>
      <ChannelModal
        isVisible={showChannelUpdate}
        onClose={() => setShowChannelUpdate(false)}
      >
        <UpdateChannel />
      </ChannelModal>
      <ToastContainer />
      <ToastContainer />
    </Layout>
  );
};

export default ViewChannel;

export const channelColumns = [
  {
    accessorKey: "name", //access nested data with dot notation
    header: "Name",
  },
  {
    accessorKey: "status", //access nested data with dot notation
    header: "Status",
  },
];
