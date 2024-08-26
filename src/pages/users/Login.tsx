import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import qs from "qs";
import { useSelector } from "react-redux";
import { RootStatus } from "../../context/store";
import toast from 'react-hot-toast';
import { useState } from "react";

type CopyrightProps = React.ComponentProps<typeof Typography>;

function Copyright(props: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {

  const lastUrl = useSelector((state: RootStatus)=> state.appSetting.lastUrl);
  const navigate = useNavigate();

  const [username, setUsername ]= useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  
    
    if (username === "") {
      toast.error("Username Should not be empty", { style: { fontFamily: "sans-serif" } });
      return;
    } else if (password === ""){
      toast.error("Password Should not be empty", { style: { fontFamily: "sans-serif" } });
      return;
    }

    const url = "http://127.0.0.1:8000/api/v1/user/token";
    const payload = {
      username,
      password,
    };
    axios.post(url, qs.stringify(payload), {
      headers: {
        "accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })
    .then((response) => {
      const responseData = response.data;
      localStorage.setItem("accessToken", responseData.access_token);
      navigate(lastUrl);
      toast.success("Login Successful!", { style: { fontFamily: "sans-serif" } });
      setUsername("");
      setPassword("");
    })
    .catch((error) => {
      console.error(error);
      toast.error(error.response.data.detail, { style: { fontFamily: "sans-serif" } });
      setUsername("");
      setPassword("");
    });

    

  };




  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={4}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" fontWeight={"550"}>
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                size="small"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <Button
              
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item>
                  <Link to={"/register"}>
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
