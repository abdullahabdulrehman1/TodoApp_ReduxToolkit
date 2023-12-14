import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import DataGriding from "./component/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { addUser,update } from "./features/TodoSlice";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  // const update = useSelector((state) => state.update);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ firstName, lastName, fathername, age }));

    console.log(firstName, lastName, age);
    setFirstName("");
    setLastName("");
    setFatherName("");
    setAge("");
  };

  return (
    <Container
      sx={{
        // backgroundImage: "url('/pexels-michael-block-3225517.jpg')",
        // backgroundSize: "cover",
        boxShadow: " 0px 0px 100px rgba(0, 10, 4, 1) ",

        borderRadius: "25px",
        marginY: "2rem",

        backgroundColor: "rgba(355, 355, 355, 0.2)", // Semi-transparent white
        backdropFilter: "blur(10px)", // Apply blur
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
            justifyContent={"space-evenly"}
            alignContent={"center"}
            rowGap={2}
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
                padding={"1rem"}
              >
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your First Name"
                    variant="outlined"
                    // size="large"
                    fullWidth
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    // size="medium"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Your Father Name"
                    variant="outlined"
                    value={fathername}
                    onChange={(event) => setFatherName(event.target.value)}
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
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    className="rounded-lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider>
        <Typography variant="h6">User Detail Grid</Typography>
      </Divider>
      <Grid
        container
        // sm={12}
        spacing={2}
        justifyContent={"space-evenly"}
        marginY={"0.5rem"}
      >
        <Grid item xs={10} marginX={"auto"}>
          <Grid container spacing={2}>
            <Grid item xs={12} marginY={"1rem"}>
              <DataGriding />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    //  </Box>
  );
};
export default App;
