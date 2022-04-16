import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
/* import {
  Drawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core"; */
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import useAuth from "../../../hooks/useAuth";
import { withRouter} from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Dashboard = (props) => {
  const { history } = props;
  // const {logOut}=useAuth();
  console.log(props);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //menu api
  const itemLists = [
    {
      menu: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/"),
    },
    {
      menu: "My Orders",
      icon: <MailIcon />,
      onClick: () => history.push("/myOrders"),
    },
    {
      menu: "Payment",
      icon: <InboxIcon/>,
      onClick: () => history.push("/payment"),
    },
    {
      menu: "Review",
      icon: "",
      // onClick: () => history.push("/userReview"),
    },
    {
      menu: "logout",
      icon: "",
      // onClick:()=>logOut
    },
  ];

  return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              King Laptop Park
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {itemLists.map((item, index) => {
              const { menu, icon, onClick } = item;
              return (
                <ListItem button key={menu} onClick={onClick}>
                  {icon && <ListItemIcon>{icon} </ListItemIcon>}
                  <ListItemText primary={menu} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </Drawer>
          <DrawerHeader />
        <Main open={open}>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aperiam, dolore nesciunt corrupti tempore quod officiis perferendis alias quaerat eaque laborum facilis voluptates molestias. Saepe molestias ullam iure labore quaerat?
                <DashboardHome></DashboardHome>
              </Typography>
        </Main>
      </Box>
  );
};
export default withRouter(Dashboard);
