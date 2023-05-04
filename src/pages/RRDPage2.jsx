import { Button } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const RRDPage2 = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/rrd1", {
      state: {
        user_id: "643ba48947daf9585f4ebf43",
      },
    });
  };
  return (
    <Fragment>
      <h1>Hi 2</h1>
      <Button onClick={handleBtnClick}>navigate to rrd 1</Button>
    </Fragment>
  );
};
export default RRDPage2;
