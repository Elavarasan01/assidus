import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./listitem";
import { Linechart, BarChart, BarChart2 } from "./Chart";
import Orders from "./Order";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import imgSrctemp from "./brand-icon.png";
import userIcon from "./user-icon.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const drawerWidth = 240;
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const data = [40, 140, 20, 80, 20, 50];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="dashboard">
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                backgroundColor: "#FFF",
                color: "#000",
                pr: "24px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "start" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                    marginRight: "36px",
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </div>

              <div style={{ display: "flex", justifyContent: "end" }}>
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <div>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </div>
                <IconButton color="inherit" sx={{ ml: 1 }}>
                  <Badge color="success" variant="dot">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <img src={userIcon} alt="user face" height={40} width={40} />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <img src={imgSrctemp} alt="Brand Icon" height={50} width={150} />
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">{mainListItems}</List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="xxl" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={8} md={4} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid lightgray",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ textAlign: "start !important" }}
                        >
                          Checking account
                        </Typography>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div>
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                              <InputLabel id="demo-simple-select-label">
                                Manage
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                              >
                                <MenuItem value={10}>Setting</MenuItem>
                                <MenuItem value={20}>Reset</MenuItem>
                                <MenuItem value={30}>Change</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </div>
                        <div>
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth size="small">
                              <InputLabel id="demo-simple-select-label">
                                January
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                              >
                                <MenuItem value={10}>Febraury</MenuItem>
                                <MenuItem value={20}>March</MenuItem>
                                <MenuItem value={30}>April</MenuItem>
                                <MenuItem value={30}>...</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </div>
                      </div>
                    </div>
                    <Linechart data={data} />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid lightgray",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ textAlign: "start !important" }}
                        >
                          Invoices owed to you
                        </Typography>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div>
                          <Button
                            component="label"
                            style={{ background: "#E8EEFD", color: "#96C1C9" }}
                          >
                            <b>New Sales Invoice</b>
                            <VisuallyHiddenInput type="file" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <BarChart />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12} md={4} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <div
                      style={{
                        borderBottom: "1px solid lightgray",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          variant="h6"
                          gutterBottom
                          style={{ textAlign: "start !important" }}
                        >
                          Total case flow
                        </Typography>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div>
                          In
                          <Checkbox
                            {...label}
                            defaultChecked
                            color="success"
                            style={{ color: "green" }}
                          />{" "}
                          Out
                          <Checkbox {...label} defaultChecked color="success" />
                        </div>
                      </div>
                    </div>
                    <BarChart2 />
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Orders />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
