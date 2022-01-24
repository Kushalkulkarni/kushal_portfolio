import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

//pages
import Home from "../../Layout/Home";
import Projects from "../../Layout/Projects";
import Blogs from "../../Layout/Blogs";
import Contact from "../../Layout/Contact";
import About from "../../Layout/About";
import ErrorPage from "../../Layout/ErrorPage";

//Router
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";

//Theme
import { themeLight } from "../../theme/themeLight";
import Section from "../../Layout/LayoutComponents/Section";

//dark light toggle
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

//styles
import LinearProgress from "@mui/material/LinearProgress";

const pages = ["Projects", "Blogs", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <AppBar
        position="sticky"
        enableColorOnDark
        sx={{ boxShadow: 2 }}
        style={{ backgroundColor: "#21b6ae" }}
      >
        <Box sx={({ flexGrow: 1 }, { margin: 0 })}>
          <Grid container spacing={0} justifyContent={"center"}>
            <Grid container xs={10}>
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Button
                    variant="text"
                    href="/kushal_portfolio"
                    color="secondary"
                  >
                    <Typography
                      fontFamily={"Bangers"}
                      fontWeight={200}
                      variant="h4"
                    >
                      Kushal Kulkarni
                    </Typography>
                  </Button>
                  <Box
                    sx={{
                      flexGrow: 1,
                      justifyContent: "flex-end",
                      display: { xs: "flex", md: "flex" },
                    }}
                    // justifyContent={"center"}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        color="inherit"
                        sx={{ my: 2, display: "block", ml: 5 }}
                        href={"/kushal_portfolio/" + page}
                      >
                        <Typography variant="h6" color={"white"}>
                          {page}
                        </Typography>
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
      {/* <LinearProgress color="success" variant="query" /> */}
      {/* Routing... */}
      <Routes>
        <Route path="/kushal_portfolio" element={<Home />} />
        <Route path="/kushal_portfolio/Projects" element={<Projects />} />
        <Route path="/kushal_portfolio/Blogs" element={<Blogs />} />
        <Route path="/kushal_portfolio/Contact" element={<Contact />} />
        <Route path="/kushal_portfolio/About" element={<About />} />
        {/* error - last route... */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};
export default ResponsiveAppBar;
