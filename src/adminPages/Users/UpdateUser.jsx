import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/Table";
import Loading from "../loading/Loading";

import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";

const UpdateUser = () => {
  // dispatch
  const dispatch = useDispatch();
  // useSelectors
  const passenger = useSelector((state) => state.passenger);
  const { id } = useParams();
  // use effect
  useEffect(() => {
    //   dispatch(singlePassenger(id));
  }, []);

  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Typography variant="h5">Customer Details</Typography>

        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4} sx={{ mt: 4 }}>
            <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                p: "20px",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src=""
                  sx={{ width: "80px", height: "80px", mx: "auto" }}
                />
                <Typography variant="h6" sx={{ my: 1 }}>
                  {passenger?.passenger?.passenger?.name}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: "15px", mb: 2 }}
                  >
                    Age:{" "}
                    <span style={{ opacity: 0.7 }}>
                      {passenger?.passenger?.passenger?.age}
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: "15px", mb: 2 }}
                  >
                    Phone:{" "}
                    <span style={{ opacity: 0.7 }}>
                      {passenger?.passenger?.passenger?.contactNumber}
                    </span>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: "15px", mb: 2 }}
                  >
                    Address: <span style={{ opacity: 0.7 }}>bahir dar</span>
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Typography variant="h6">Transaction List</Typography>

            {passenger?.passenger?.tickets ? (
              <Table
                data={passenger?.passenger?.tickets}
                fields={passengerColumns}
                numberOfRows={passenger?.passenger?.tickets.length}
                enableTopToolBar={true}
                enableBottomToolBar={true}
                enablePagination={true}
                enableRowSelection={true}
                enableColumnFilters={true}
                // enableEditing={true}
                enableColumnDragging={true}
                showPreview={true}
              />
            ) : (
              <Loading />
            )}
          </Grid>
        </Grid> */}
      </Box>
    </Layout>
  );
};

export default UpdateUser;
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
