import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

const RP1 = () => {
  const [txt, setTxt] = useState("");
  const dispatch = useDispatch();
  const handleAdd1 = () => {
    dispatch(counterActions.add1());
  };

  const handleSub1 = () => {
    dispatch(counterActions.sub1());
  };

  const handleInputChange = (e) => {
    setTxt(e.target.value);
  };

  const handleAddClick = () => {
    dispatch(counterActions.addNumber(txt));
  };

  return (
    <Fragment>
      <button onClick={handleAdd1}>+1</button>
      <button onClick={handleSub1}>-1</button>
      <input type="text" value={txt} onChange={handleInputChange} />
      <button onClick={handleAddClick}>add</button>
      <Link to="/rp2">to rp2</Link>
    </Fragment>
  );
};

export default RP1;
