import { Fragment } from "react";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const FirstComponent = () => {
  const someText = "asdfkljgnasoigunaesoignaesrgokjang";
  return (
    <Fragment>
      <h1>Hello component world</h1>
      <Divider>
        <Chip label="my chip"> </Chip>
      </Divider>
      <Divider>
        <Chip label="my chip"> </Chip>
      </Divider>
      <Divider>
        <Chip label="my chip"> </Chip>
      </Divider>
      <Typography variant="h1" color="initial">
        New title
      </Typography>
      <Typography
        variant="body1"
        component="h2"
        color="initial"
        fontWeight={700}
        sx={{
          color: "red",
        }}
      >
        p
      </Typography>
      <h2 style={{ color: "red", backgroundColor: "red" }}>
        This is: {someText}
      </h2>
      <Button variant="contained" color="success" startIcon={<AcUnitIcon />}>
        click me
      </Button>
      <Card sx={{ width: "20rem" }} square raised>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
          />
        </CardActionArea>
        <CardHeader title="main title" subheader="sub title"></CardHeader>
        <CardContent>
          <Typography>description</Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" color="primary">
            Buy now
          </Button>
          <Button variant="text" color="primary">
            Buy now
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default FirstComponent;
