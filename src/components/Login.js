import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Login = () => {
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 50 }} alignItems={"center"} justifyContent={"center"}>
        <Grid style={{ width: 400, background: "lightgray" }} container alignItems={"center"} direction={"column"}>
          <Box p={5}>
            <Button color={'secondary'}>Вхід за допомогою Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
