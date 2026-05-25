import MenuIcon from "@mui/icons-material/Menu";
import { FormControl } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import BellIcon from "./assets/navbarIcons/majesticons--bell (1).svg";
import SettingIcon from "./assets/sidebar-icons/ant-design--setting-filled.svg";
import HotelIcon from "./assets/sidebar-icons/bxs--buildings.svg";
import UserIcon from "./assets/sidebar-icons/fe--users.svg";
import VehicleIcon from "./assets/sidebar-icons/fluent--vehicle-cab-20-filled.svg";
import SearchGlobeIcon from "./assets/sidebar-icons/gis--search-globe (1).svg";
import DashboardIcon from "./assets/sidebar-icons/material-symbols--dashboard.svg";
import DesignIcon from "./assets/sidebar-icons/mdi--paint-outline.svg";
import Restaurant from "./assets/sidebar-icons/mingcute--fork-spoon-line.svg";

const drawerWidth = 240;
const Sidebaritems = [
  {
    label: "Dashboard",
    id: "1",
    icon: DashboardIcon,
  },
  {
    label: "Staff Management",
    id: "2",
    icon: UserIcon,
  },
  {
    label: "Vehicles",
    id: "3",
    icon: VehicleIcon,
  },
  {
    label: "Hotels",
    id: "4",
    icon: HotelIcon,
  },
  {
    label: "Restaurants & Menus",
    id: "5",
    icon: Restaurant,
  },
  {
    label: "Design",
    id: "6",
    icon: DesignIcon,
  },
];

const SideBarAccountItems = [
  {
    label: "Settings",
    id: "7",
    icon: SettingIcon,
  },
];

interface Props {
  style?: React.CSSProperties;
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div
      style={{ backgroundColor: "#3e3432", color: "white", height: "100dvh" }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px ",
          height: "70px",
          borderBottom: "1px solid white",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            borderRadius: "60%",
            width: "40px",
            height: "40px",
            display: "flex",
            marginLeft: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={SearchGlobeIcon} alt="Search globe" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "18px", fontWeight: "700" }}>TourAdmin</span>
          <span style={{ fontSize: "12px", color: "lightgray" }}>
            Management System
          </span>
        </div>
      </Box>

      <List>
        <span
          style={{ marginLeft: "20px", fontWeight: "700", color: "lightgray" }}
        >
          Main Menu
        </span>
        {Sidebaritems.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton
              sx={{
                margin: "5px 10px",
                borderRadius: "10px",

                "&.active": {
                  backgroundColor: "white",
                  color: "black",
                },
                "&.active .SideBarIcons": {
                  backgroundColor: "black",
                  borderRadius: "8px",
                  padding: "10px",
                },
              }}
            >
              <ListItemIcon
                className="SideBarIcons"
                sx={
                  {
                    // backgroundColor: "black",
                    // borderRadius: "8px",
                    // padding: "10px",
                    // minWidth: "45px",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }
                }
              >
                <img
                  style={{ width: "20px" }}
                  src={text.icon}
                  alt={text.label}
                />
              </ListItemIcon>

              <ListItemText
                className="SidebaritemsTexts"
                primary={text.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <hr></hr>
      <List>
        <span
          style={{ marginLeft: "20px", fontWeight: "700", color: "lightgray" }}
        >
          System
        </span>
        {SideBarAccountItems.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon
                className="SideBarIcons"
                sx={
                  {
                    // backgroundColor: "white",
                    // borderRadius: "8px",
                    // padding: "10px",
                    // minWidth: "45px",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // marginLeft: "10px"
                  }
                }
              >
                <img
                  style={{ width: "20px" }}
                  src={text.icon}
                  alt={text.label}
                />
              </ListItemIcon>

              <ListItemText
                className="SidebaritemsTexts"
                primary={text.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div style={{ display: "flex", gap: "24px", paddingRight: "30px" }}>
      {/* side bar  */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            height: 68,
            backgroundColor: "white",
            color: "black",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "22px", fontWeight: "700" }}>
                  Dashboard Overview
                </span>
                <span style={{ fontWeight: "600", color: "blue" }}>
                  Dashboard
                </span>
              </Box>
              <Box>
                <img
                  style={{ backgroundColor: "red" }}
                  src={BellIcon}
                  alt="Bell Icon"
                />
              </Box>
            </Box>

            <FormControl
              size="small"
              sx={{
                display: { xs: "none", sm: "block", md: "block" },
                backgroundColor: "background.paper",
                borderRadius: 1,
              }}
            ></FormControl>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { md: drawerWidth },
            flexShrink: { sm: 0 },
            p: 3,
            mt: 8,
            bgcolor: "background.default",
            color: "text.primary",
            minHeight: "100vh",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            slotProps={{
              root: {
                keepMounted: true,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Box component="main">
        <h1>Heolooo</h1>
      </Box>
    </div>
  );
}
