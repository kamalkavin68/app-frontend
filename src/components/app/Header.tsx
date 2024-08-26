import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootStatus } from '../../context/store';
import { useMediaQuery, useTheme } from '@mui/material';
import { navWidthBreakpoint } from '../../config/configData';
import { toggleNavOpen } from '../../context/slices/appSetting';
import { Link } from 'react-router-dom';

export default function MenuAppBar() {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state: RootStatus) => state.appSetting.isNavOpen);
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up(navWidthBreakpoint));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar
        position="fixed"
        style={{
          backgroundColor: "white",
          color: "black",
          left: isLgUp ? (isNavOpen ? "280px" : "72px") : undefined,
          width: isLgUp
            ? `calc(100% - ${isNavOpen ? "280px" : "72px"})`
            : "100%",
          transition: theme.transitions.create(["left", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(toggleNavOpen())}
          >
            <MenuIcon style={{ color: "#3b5b63" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>


          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ color: "#3b5b63" }} />
            </IconButton>
            <Menu

              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              <Link to={"/profile"}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>

              <Link to={"/logout"}>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Link>

            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
