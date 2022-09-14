import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Loader = () => {
  return (
    <Container>
      <Grid container style={{ height: window.innerHeight - 50 }} alignItems={"center"} justifyContent={"center"}>
        <Grid container alignItems={"center"} direction={"column"}>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
