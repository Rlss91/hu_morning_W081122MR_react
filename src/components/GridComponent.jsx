import { Grid, Box } from "@mui/material";

const GridComponent = () => {
  return (
    <Grid container spacing={2} columnSpacing={2} rowSpacing={2}>
      <Grid item xs={8}>
        <Box className="red-backgroud">xs=8</Box>
      </Grid>
      <Grid item xs={1} sx={{ backgroundColor: "#123" }}></Grid>
      <Grid item xs={3}>
        <Box sx={{ backgroundColor: "blue" }}>xs=3</Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ backgroundColor: "green" }}>xs=4</Box>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ backgroundColor: "yellow" }}>xs=8</Box>
      </Grid>
    </Grid>
  );
};

export default GridComponent;
