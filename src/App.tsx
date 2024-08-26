import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/app/Header";
import SideNav from "./components/app/SideNav";
import { useEffect } from "react";
import checkUser from "./utils/checkUser";
// import { useDispatch } from "react-redux";
// import { setLastUrl } from "./context/slices/appSetting";
import { useSelector } from "react-redux";
import { RootStatus } from "./context/store";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { drawerWidthClosed, drawerWidthOpen, navWidthBreakpoint } from "./config/configData";

function App() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastUrl = useSelector((state: RootStatus) => state.appSetting.lastUrl);

  const isNavOpen = useSelector((state: RootStatus) => state.appSetting.isNavOpen);
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up(navWidthBreakpoint));

  // Update Redux state with the last URL
  // useEffect(() => {
  //   dispatch(setLastUrl("/"));
  // }, [dispatch]);

  // Check user authentication status on mount
  useEffect(() => {
    checkUser(navigate);
  }, [navigate, lastUrl]);

  return (
    <>
      <Header />
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          ml: isNavOpen && isLgUp ? `${drawerWidthOpen}px` : isLgUp ? `${drawerWidthClosed}px` : "0px",
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          backgroundColor:"#d6e9ee"
        }}
      >


        <Container maxWidth="xl" style={{paddingTop:"72px", }}>
          <Box sx={{ minHeight:"90.5vh"}}>
            <Outlet />
          </Box>
        </Container>

      </Box>
    </>
  );
}

export default App;
