import styled from "@emotion/styled";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { lineChartData, lineChartOptions } from "../../../data/chartData";
import { stats } from "../../../data/stats";
import LineChart from "../charts/LineChart";

const Stats = () => {
  const Item = styled(Paper)({
    padding: "5px 10px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  return (
    <Grid container spacing={2}>
      {stats.map(
        ({ id, title, amount, icon, iconBg, iconColor, inMonth }, i) => (
          <Grid
            item
            xs={12}
            sm={i === stats.length - 1 ? 12 : 6}
            lg={4}
            key={id}
          >
            <Item
              sx={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ opacity: 0.7 }}>{title}</Typography>
                  <IconButton
                    sx={{
                      background: `${iconBg} !important`,
                      color: iconColor,
                    }}
                  >
                    {icon}
                  </IconButton>
                </Box>
                <Typography variant="h4" sx={{ my: 2 }}>
                  {`${amount}`}
                </Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  {"+12%" + inMonth}
                </Typography>
              </Box>
            </Item>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default Stats;
