import { Fragment, useState, useCallback } from "react";
import RRPButtonParcial from "./RRPButtonParcial";
import RRPH3Parcial from "./RRPH3Parcial";
import RRPButton2Parcial from "./RRPButton2Parcial";
import RRPPropsChangedComponent from "./RRPPropsChangedComponent";

const ReRenderPage = () => {
  const [isActive, setIsActive] = useState(true);
  const [txt, setTxt] = useState("");
  const handleToggleClick = () => {
    setIsActive(!isActive);
  };
  const handleTxtChange = (e) => {
    setTxt(e.target.value);
  };
  // const handleBtn2Click = () => {
  //   console.log("txt from handle btn 2", txt);
  //   setTxt("");
  // };
  const handleBtn2Click = useCallback(() => {
    console.log("txt from handle btn 2", txt);
    setTxt("");
  }, [txt]);
  return (
    <Fragment>
      <h1>Re render page</h1>
      <input type="text" value={txt} onChange={handleTxtChange} />
      <button onClick={handleToggleClick}>toggle active</button>
      <RRPButtonParcial></RRPButtonParcial>
      <RRPButton2Parcial onClick={handleBtn2Click}>
        click to clear input
      </RRPButton2Parcial>
      <RRPH3Parcial isActive={isActive}></RRPH3Parcial>
      <RRPPropsChangedComponent isActive={isActive} txt={txt} />
    </Fragment>
  );
};

export default ReRenderPage;
