import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import projectsArr from "../../content/ProjectsInput";
import { Hidden, Box } from "@mui/material";
import ReactTooltip from "react-tooltip";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // borderRight: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: 35 }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor: 'black',
    // theme.palette.mode === "dark"
    //   ? "rgba(255, 255, 255, .05)"
    //   : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const NewTooltip = styled(ReactTooltip)`
    opacity: 1 !important;
`;

export default function SelectedProjects() {
  const [expanded, setExpanded] = React.useState("1"); // "1" refers to projectId

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return projectsArr.map((project, index) => (
    <div>
      <Hidden xsDown>
        <NewTooltip
          id={project.card.title}
          place="right"
          // effect="solid"
          delayShow={10}
          backgroundColor={"none"}
        >
          <Box>
            <img height={300} src={project.card.image}></img>
          </Box>
          {/* <Box
            component="img"
            sx={
              {
                
              }
            }
          /> */}
        </NewTooltip>
      </Hidden>
      <Accordion
        expanded={expanded === project.projectId}
        onChange={handleChange(project.projectId)}
        data-tip
        data-for={project.card.title}
      >
        <AccordionSummary
          aria-controls={project.projectId}
          id={project.projectId}
        >
          <Typography variant="h2">{project.card.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{project.card.desription}</Typography>
          <Box>
            <Link
              to={`/Projects/${
                project.card.title.replace(" ", "_") + "_" + index
              }`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="text">See More</Button>
            </Link>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  ));
}
