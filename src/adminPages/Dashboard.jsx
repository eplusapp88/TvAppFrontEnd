import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import Stats from "../components/home/stats/Stats";
import DonutChart from "../components/DonutChart";
import Layout from "./layout/Layout";
import LineChart from "../components/sales/charts/LineChart";
import { salesLineChartData, salesLineChartOptions } from "../data/chartData";
import {
  productSalesDognutChartData,
  productSalesDognutChartOptions,
} from "../data/chartData";
const Dashboard = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <ComponentWrapper>
          <Stats />
        </ComponentWrapper>
        <ComponentWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <DonutChart
                chartOptions={productSalesDognutChartOptions}
                chartData={productSalesDognutChartData}
              />
            </Grid>
          </Grid>
        </ComponentWrapper>
        <ComponentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <LineChart
                chartOptions={salesLineChartOptions}
                chartData={salesLineChartData}
              />
            </Grid>
          </Grid>
        </ComponentWrapper>
      </Box>
    </Layout>
  );
};

export default Dashboard;
