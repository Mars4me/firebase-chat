import { Button, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const Navbar = () => {
  const user = false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justifyContent="flex-end">
            {user ? (
              <Button color={"secondary"} variant={"outlined"}>
                <Typography color={"white"}>Вийти</Typography>
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE} style={{textDecoration: "none"}}>
                <Button variant={"outlined"} color={"secondary"}>
                  {" "}
                  <Typography color={"white"} >Логін</Typography>
                </Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
