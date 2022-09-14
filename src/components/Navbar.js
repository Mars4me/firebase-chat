import { Button, Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "..";
import { LOGIN_ROUTE } from "../utils/consts";
import {signOut} from 'firebase/auth'

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justifyContent="flex-end">
            {user ? (
              <Button onClick={() => signOut(auth)} color={"secondary"} variant={"outlined"}>
                <Typography color={"white"}>Вийти</Typography>
              </Button>
            ) : (
              <NavLink to={LOGIN_ROUTE} style={{ textDecoration: "none" }}>
                <Button  variant={"outlined"} color={"secondary"}>
                  {" "}
                  <Typography color={"white"}>Логін</Typography>
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
