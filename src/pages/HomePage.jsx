import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

import CardComponent from "../components/CardComponent";
import ButtonComponent from "../components/ButtonComponent";
import { toast } from "react-toastify";
import useQueryParams from "../hooks/useQueryParams";

const HomePage = () => {
  const [cardsArr, setCardsArr] = useState(null);
  const navigate = useNavigate();
  let qparams = useQueryParams();
  console.log("qparams", qparams);
  // let [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams", searchParams);
  // for (const [key, value] of searchParams) {
  //   console.log({ key: value });
  //   console.log({ [key]: value });
  // }
  useEffect(() => {
    /*
      useEffect cant handle async ()=>{}
      this is why we use the old promise way
    */
    axios
      .get("/cards/cards")
      .then(({ data }) => {
        console.log("data", data);
        setCardsArr(data);
      })
      .catch((err) => {
        console.log("err from axios", err);

        toast.error("Oops");
      });
  }, []);
  const handleDeleteFromInitialCardsArr = async (id) => {
    // let newCardsArr = JSON.parse(JSON.stringify(cardsArr));
    // newCardsArr = newCardsArr.filter((item) => item.id != id);
    // setCardsArr(newCardsArr);
    try {
      await axios.delete("/cards/" + id); // /cards/:id
      setCardsArr((newCardsArr) =>
        newCardsArr.filter((item) => item._id != id)
      );
    } catch (err) {
      console.log("error when deleting", err.response.data);
    }
  };
  const handleEditFromInitialCardsArr = (id) => {
    navigate(`/edit/${id}`); //localhost:3000/edit/123213
  };

  if (!cardsArr) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        {cardsArr.map((item) => (
          <Grid item xs={4} key={item._id + Date.now()}>
            <CardComponent
              id={item._id}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              img={item.image ? item.image.url : ""}
              onDelete={handleDeleteFromInitialCardsArr}
              onEdit={handleEditFromInitialCardsArr}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

/*
  <CardComponent
              id={item.id}
              title={item.title}
              price={item.price}
              ----
              onDelete={handleDeleteFromInitialCardsArr}
              onEdit={handleEditFromInitialCardsArr}
            />
  component 1:
    <CardComponent
              id={1}
              ----
              onDelete={handleDeleteFromInitialCardsArr}
              onEdit={handleEditFromInitialCardsArr}
            />
  component 2:
    <CardComponent
              id={2}
              ----
              onDelete={handleDeleteFromInitialCardsArr}
              onEdit={handleEditFromInitialCardsArr}
            />
*/

export default HomePage;
