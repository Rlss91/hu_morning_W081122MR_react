import { useLocation } from "react-router-dom";

const RRDPage1 = () => {
  let location = useLocation();
  console.log("location from page", location);
  return <h1>Hi</h1>;
};
export default RRDPage1;
