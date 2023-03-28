import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

const RP1 = () => {
  const dispatch = useDispatch();
  const handleAdd1 = () => {
    dispatch(counterActions.add1());
  };

  const handleSub1 = () => {
    dispatch(counterActions.sub1());
  };

  return (
    <Fragment>
      <button onClick={handleAdd1}>+1</button>
      <button onClick={handleSub1}>-1</button>
      <Link to="/rp2">to rp2</Link>
    </Fragment>
  );
};

export default RP1;
