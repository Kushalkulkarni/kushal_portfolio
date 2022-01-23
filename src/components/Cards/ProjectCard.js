import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box, Grid, Fade } from "@mui/material";
//tooltip
import { Hidden } from "@mui/material";
import ReactTooltip from "react-tooltip";

export default function ProjectCard(props) {
  return (
    <>
      <Hidden xsDown>
        <ReactTooltip
          id={props.projectDetails.card.title}
          place="bottom"
          effect="float"
          delayShow={250}
          backgroundColor={"#05668d"}
        >
          <Box width="250px">
            <Typography variant="h6" component="h6">
              Summary: {props.projectDetails.card.title}
            </Typography>
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              Role
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.role}
            </Typography>
            <br />
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              Industry
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.industry}
            </Typography>
            <br />
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              Field
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.field}
            </Typography>
          </Box>
        </ReactTooltip>
        <ReactTooltip
          id={props.projectDetails.projectId}
          place="bottom"
          effect="float"
          delayShow={250}
          backgroundColor={"#05668d"}
        >
          <Box width="250px">
            <Typography
              variant="overline"
              component="p"
              style={{ color: "#b3dd18" }}
            >
              ToolSet
            </Typography>
            <Typography variant="caption" component="p">
              {props.projectDetails.card.tooltip.tools}
            </Typography>
          </Box>
        </ReactTooltip>
      </Hidden>
      <Fade in timeout={1000}>
        <Card sx={{ maxWidth: 550, minHeight: 400, mt: 4 }} square>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={props.projectDetails.card.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h2" display={"inline"}>
                {props.projectIndex}. {"  "}
              </Typography>
              <Typography gutterBottom variant="h2" display={"inline"}>
                {props.projectDetails.card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.projectDetails.card.desription}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container xs={12} justifyContent={"space-between"}>
                <Button
                  data-tip
                  data-for={props.projectDetails.card.title}
                  size="small"
                  color="primary"
                  sx={{ m: 1 }}
                >
                  Summary
                </Button>
                <Button
                  data-tip
                  data-for={props.projectDetails.projectId}
                  size="small"
                  color="primary"
                  sx={{ m: 1 }}
                >
                  Tool Set
                </Button>
                <Button
                  data-tip
                  data-for={props.projectDetails.projectId}
                  size="small"
                  color="primary"
                  sx={{ m: 1 }}
                >
                  My Learnings
                </Button>
              </Grid>
            </CardActions>
          </CardActionArea>
        </Card>
      </Fade>
    </>
  );
}
