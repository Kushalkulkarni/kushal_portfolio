import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Section = (props) => {
  return (
    <Box
      sx={
        ({ flexGrow: 1 },
        { margin: props.margin, mt: props.mtop, mb: props.mbot })
      }
    >
      
      <Grid container spacing={0} justifyContent={"center"} >
        <Grid container xs={props.gridChildren} justifyContent={props.place}>
          {props.children}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Section;
