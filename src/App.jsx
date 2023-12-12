import { useState } from "react";
import reactLogo from "./assets/react.svg";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import DataGriding from "./component/DataGrid";

const App = () => {
  return (
    // <div className="container mx-auto my-20 p-10 border shadow-xl  rounded-xl">
    <Container
      sx={{
        boxShadow: "0px 2px 8px rgba(0, 0, 4, 0.25)",
        borderRadius: "25px",
        marginY: "2rem",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"space-evenly"}
        marginY={"0.5rem"}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Grid
            container
            spacing={2}
            // border={2}
            justifyContent={"space-evenly"}
            alignContent={"center"}
            rowGap={2}
            // gridAutoRows={"minmax(1000px, auto)"}
            gridRow={"auto"}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                textAlign={"center"}
              >
                Todo App
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                justifyContent={"space-evenly"}
                // justifyContent={"center"}
                // alignContent={"center"}
                // justifyItems={"center"}
                // alignItems={"center"}
                // border={2}
                // lg={12}
                sm={12}
                // marginX={"auto"}
                padding={"1rem"}
              >
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your First Name"
                    variant="outlined"
                    // size="large"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your Last Name"
                    variant="outlined"
                    // size="medium"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your Father Name"
                    variant="outlined"
                    // size= "medium"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} marginX={"auto"}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your Age"
                    // type="number"
                    variant="outlined"
                    // size="medium"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    className="rounded-lg"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        sm={12}
        spacing={2}
        justifyContent={"space-evenly"}
        marginY={"0.5rem"}
      >
        <Grid item xs={10} marginX={"auto"}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <DataGriding />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default App;
