import { Box, Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";

const initialCardsArr = [
  {
    id: 1,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature 1",
    price: 112,
    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
        Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
        If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
  {
    id: 2,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature 2",
    price: 112,
    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
        Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
        If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
  {
    id: 3,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature 3",
    price: 112,
    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
        Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
        If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
  {
    id: 4,
    img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
    title: "nature 4",
    price: 112,
    description: `Here’s a gift to help bring a little more beauty to your life in September: An image of the world-famous Spirit Island at Maligne Lake in Alberta’s Jasper National Park, specially prepared to serve as a wallpaper or background image for your computer, tablet or mobile phone.
        Use the links below to download the wallpaper in the appropriate size, and enjoy the scene all month long. We’ll create another beautiful Alberta image next month for you to enjoy.
        If you want to see Spirit Island and Jasper National Park under the stars yourself (don’t forget to check out the park’s Dark Sky Festival from Oct. 14 to 23), scroll down for more information.`,
  },
];

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {initialCardsArr.map((item) => (
          <Grid item xs={4} key={item.id + Date.now()}>
            <CardComponent {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
