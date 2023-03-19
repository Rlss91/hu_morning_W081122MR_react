import { memo } from "react";

const RRPPropsChangedComponent = ({ isActive, txt }) => {
  console.log("h4 changed");
  return <h4>changed</h4>;
};
export default memo(RRPPropsChangedComponent, (prev, next) => {
  console.log("prev", prev);
  console.log("next", next);
  if (prev.isActive != next.isActive) {
    return false; // rerender
  } else {
    return true; // don't rerender
  }
});
