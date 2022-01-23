import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Section from "./LayoutComponents/Section";
import { Typography } from "@mui/material";
import SelectedProjects from "../components/Accordion/SelectedProjects";
import Grow from "@mui/material/Grow";
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import SkillChip from "../components/Chips/SkillChip";
import skillsArr from "../content/Skills";
import ProfilePicture from "../components/Miscellaneous/ProfilePicture";
import Divider from "@mui/material/Divider";
import MyDialog from "../components/Miscellaneous/MyDialog";
import Footer from '../components/Miscellaneous/Footer';
import WelcomeNote from '../components/Miscellaneous/WelcomeNote';

var myDate = new Date();
var hrs = myDate.getHours();
var day = myDate.getDay();
var greet;
if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

var weekday;
if ((day === 1)) weekday = "Monday";
else if (day === 2) weekday = "Tuesday";
else if (day === 3) weekday = "Wednesday";
else if (day === 4) weekday = "Thursday";
else if (day === 5) weekday = "Friday";
else if (day === 6) weekday = "Saturday";
else if (day === 0) weekday = "Sunday";

export default function Home() {
  const containerRef = React.useRef(null);
  return (
    <>
      {/* <MyDialog /> */}
      {/* <WelcomeNote/> */}
      <Section margin={5} gridChildren={10}>
        {/* Section 1 */}
        <Fade in timeout={1500}>
          <Typography>
            <Typography
              variant="h1"
              mb={5}
              mt={5}
              color={"secondary"}
              fontWeight={300}
            >
              {greet}!
            </Typography>
            {/* <Typography variant="h5" mb={5} color={"white"} fontWeight={300}>
              I hope you are having an amazing {weekday}!
            </Typography> */}
          </Typography>
        </Fade>

        <Fade in timeout={2000}>
          <Box>
            <Typography
              fontWeight={300}
              variant="h2"
              display={"inline"}
              sx={{ mt: 5 }}
            >
              Hi, my name is{" "}
            </Typography>
            <Typography
              fontWeight={300}
              color="primary"
              variant="h2"
              display={"inline"}
            >
              Kushal Kulkarni
            </Typography>
            <Typography variant="h2" sx={{ mt: 5 }}>
              <Typography fontWeight={300} display={"inline"} variant="h2">
                I am an aspiring
              </Typography>
              <Typography
                fontWeight={300}
                display={"inline"}
                variant="h2"
                color={"primary"}
              >
                {" "}
                Product Manager{" "}
              </Typography>
              <Typography fontWeight={300} display={"inline"} variant="h2">
                currently pursuing my Grand Ecole Masters in Management at ESCP
                Business School.
              </Typography>
            </Typography>
          </Box>
        </Fade>
        <Fade in timeout={2500}>
          <Typography variant="h5" sx={{ mt: 5 }}>
            I am currently based in Berlin, Germany
          </Typography>
        </Fade>
      </Section>
      {/* Section 2 */}{" "}
      <Section
        bgcolor="white"
        place="center"
        mbot={40}
        mtop={40}
        // margin={40}
        gridChildren={10}
      >
        <Typography variant="h5" align="center" color="primary">
          Let me tell you a bit about myself…
        </Typography>
      </Section>
      <Section margin={5} gridChildren={6}>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} md={5} lg={5}>
            <ProfilePicture photo={`/assets/profilepicture.jpg`} />
          </Grid>
          <Grid item xs={12} md={7} lg={7}>
            <Typography variant="h4" sx={{ mt: 5 }}>
              <Typography variant display={"inline"} color="primary">
                Curiosity,{" "}
              </Typography>
              <Typography variant display={"inline"} color="primary">
                Neophilia,{" "}
              </Typography>
              <Typography variant display={"inline"} color="primary">
                Lateral Thinking{" "}
              </Typography>
              {"&"}
              <Typography variant display={"inline"} color="secondary">
                {" "}
                a passion for creating awesome products{" "}
              </Typography>
              represents my personality.
            </Typography>{" "}
          </Grid>
        </Grid>
      </Section>
      <Section margin={5} gridChildren={6}>
        <Typography variant="h6" sx={{ mt: 5 }}>
          I am full of creative enthusiasm, and I am in search of opportunities
          that will enable me to connect the dots between the work at hand and
          the unceasing exploration of new tech, new ideas, new tools and new
          people.
        </Typography>
      </Section>
      <Section margin={5} gridChildren={10}>
        {/* Section 4 */}
        <Typography variant="h1" sx={{ mt: 20, mb: 10 }}>
          Selected Projects
        </Typography>
        <Grid container sx={{ mb: 10 }}>
          <Grid item xs={12} lg={8}>
            <SelectedProjects />
          </Grid>
        </Grid>
      </Section>
      <Section margin={5} gridChildren={10}>
        <Typography variant="h1" sx={{ mb: 10 }}>
          My PM Skillset
        </Typography>
        <Grid>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Tech
          </Typography>
          <Grid container sx={{ mb: 10 }}>
            {skillsArr.map((skill) =>
              skill.type == "tech" ? (
                <SkillChip skill={skill} skillColor={1} />
              ) : (
                ""
              )
            )}
          </Grid>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Management Experience
          </Typography>
          <Grid container sx={{ mb: 10 }}>
            {skillsArr.map((skill) =>
              skill.type == "management" ? (
                <SkillChip skill={skill} skillColor={0} />
              ) : (
                ""
              )
            )}
          </Grid>
        </Grid>
      </Section>
      <Section margin={5} gridChildren={6}>
        <Typography fontWeight={400} variant="h1" sx={{ mt: 10 }} color="secondary">
          Got any ideas?
        </Typography>
      </Section>
      <Section gridChildren={6} place="flex-end">
        <Button variant="text" sx={{ textTransform: "none" }}>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <Typography fontWeight={400} variant="h1" color="primary">
              Let’s talk.
            </Typography>
            <LinearProgress style={{ width: "100%" }} />
          </Link>
        </Button>
      </Section>
      <Section margin={5} gridChildren={6}>
        {/* Section 3 */}
        <Typography
          variant="overline"
          fontSize={24}
          sx={{
            mb: {
              xs: 4, // theme.breakpoints.up('xs')
              md: 8, // theme.breakpoints.up('md')
            },
            mt: {
              xs: 4, // theme.breakpoints.up('xs')
              md: 8, // theme.breakpoints.up('md')
            },
            fontSize: {
              xs: 12, // theme.breakpoints.up('xs')
              sm: 18,
              md: 24, // theme.breakpoints.up('md')
            },
          }}
        >
          LinkedIn | Email | Instagram | CV
        </Typography>
      </Section>
      <Footer/>
    </>
  );
}
