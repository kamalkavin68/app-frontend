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
import axios from "axios";
import toast from 'react-hot-toast';

import { BASE_URL } from "../../config/configData";
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

export default function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payloadDta = {
      username,
      email,
      password,
    }
    if (password === confPassword) {
      axios.post(`${BASE_URL}/user/create`, payloadDta, {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        }
      })
        .then((response) => {
          const data = response.data;
          console.log(data);
          toast.success(data.detail, { style: { fontFamily: "sans-serif" } });
          navigate("/login")

        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.detail, { style: { fontFamily: "sans-serif", fontSize: "14px" } });
        })
      
    } else {
      toast.error("Password not match", { style: { fontFamily: "sans-serif", fontSize: "14px" } });
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setConfPassword("");


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
              Create Account
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                size="small"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                autoComplete="new-password"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="conformPassword"
                label="Confirm Password"
                type="password"
                id="conformPassword"
                autoComplete="new-password"
                size="small"
                onChange={(e) => setConfPassword(e.target.value)}
                value={confPassword}
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
                  <Link to={"/login"}>
                    {"Already have an account? Log In"}
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
