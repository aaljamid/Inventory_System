import React from "react";

// import all the components form material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// specify the card size
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  color: "red"
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // using external img for the card background
          image={
            "https://images.unsplash.com/photo-1518378782190-56da4f3efde6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          }
          title="Inventory"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Servises
          </Typography>
          <Typography variant="body2" color="inherit" component="p">
            Keep track of your inventory.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="inherit">
          INVENTORY
        </Button>
      </CardActions>
    </Card>
  );
}
