import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Fade } from "@mui/material";

export default function BlogCard(props) {
  return (
    <Fade in timeout={1000}>
      <Card sx={{ mt: 4 }} square>
        <CardActionArea>
          <Grid
            container
            direction={props.blogIndex % 2 ? "row-reverse" : "row"}
          >
            <Grid item xs={12} lg={4}>
              <CardMedia
                component="img"
                //height="140"
                image={props.blogDetails.card.media.image}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} lg={8}>
              <>
                <CardContent>
                  <Typography gutterBottom variant="h2" component="div">
                    {props.blogDetails.card.title}
                  </Typography>
                  <Typography variant="button" color="text.primary">
                    {props.blogDetails.modal.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {props.blogDetails.card.desription}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                <Grid container xs={12} justifyContent={"space-between"}>
                  <Button size="small" color="primary" sx={{ m: 1 }}>
                    Summary
                  </Button>
                </Grid>
              </CardActions> */}
              </>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Fade>
  );
}
