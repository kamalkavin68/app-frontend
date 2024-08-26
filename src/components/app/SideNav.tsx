import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector, useDispatch } from 'react-redux';
import { RootStatus } from '../../context/store';
import { setNavOpen } from '../../context/slices/appSetting';
import { useMediaQuery, useTheme } from '@mui/material';
import { drawerWidthClosed, drawerWidthOpen, navWidthBreakpoint } from '../../config/configData';

export default function SideNav() {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state: RootStatus) => state.appSetting.isNavOpen);
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up(navWidthBreakpoint));

  return (
    <Drawer
      onClose={() => dispatch(setNavOpen(false))}
      variant={isLgUp ? "permanent" : "temporary"}
      open={isNavOpen}
      sx={{
        width: isNavOpen ? drawerWidthOpen : drawerWidthClosed,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isNavOpen ? drawerWidthOpen : drawerWidthClosed,
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: isNavOpen ? 'auto' : 'hidden',
        },
      }}
    >
      <Box
        sx={{
          height: '100vh',
          backgroundColor: "#3b5b63",
          color: "white",
        }}
        onClick={() => dispatch(setNavOpen(false))}
      >
        <List disablePadding>
          <ListItem disablePadding style={{ height: '64px', }}>

            <div style={{
              width: "100%", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <h2 className='manrope-font-style' style={{ fontSize: "24px", fontWeight: "bold" }}>{isNavOpen ? "Application" : "App"}</h2>
            </div>
          </ListItem>
          <Divider style={{ color: "red" }} />
          <List>

            {['All Mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} >

                {/* 
                <ListItemButton style={{backgroundColor:"#76b5c5", borderRadius:"8px"}}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon style={{color:"white"}}/> : <MailIcon style={{color:"white"}}/>}
                  </ListItemIcon>
                  {isNavOpen && <ListItemText primary={text} />}
                </ListItemButton> */}

                <ListItemButton style={{ backgroundColor: "", borderRadius: "8px", width: "100%", height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>

                  <div style={{width:isNavOpen ? "30%": "", display:"flex", justifyContent:"end"}}>
                    {index % 2 === 0 ? <InboxIcon style={{ color: "white" }} /> : <MailIcon style={{ color: "white" }} />}
                  </div>
                  {isNavOpen && <div style={{width:isNavOpen ? "60%": "", paddingLeft:"16px"}}>
                    <p className='manrope-font-style' style={{fontSize:"16px"}}>{text}</p>
                  </div>}
                  


                </ListItemButton>



              </ListItem>
            ))}


          </List>
        </List>
      </Box>
    </Drawer>
  );
}
