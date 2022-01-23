import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import { Done } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function SkillChip(props) {
  return (
    <Chip
      label={
        <Typography
          variant="h6"
          color={props.skillColor == 1 ? "primary" : "secondary"}
        >

          {props.skill.name}
        </Typography>
      }
      variant="outlined"
      //deleteIcon={<CircularProgress />}
      avatar={
        <CircularProgress
          variant="determinate"
          value={props.skill.status}
          size={20}
          thickness={5}
        />
      }
      sx={{ margin: 1, maxWidth: 500 }}
      size="medium"
    />
  );
}
