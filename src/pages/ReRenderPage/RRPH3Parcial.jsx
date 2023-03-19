import { memo } from "react";

const RRPH3Parcial = ({ isActive }) => {
  console.log("h3 initial");
  return (
    <h3 style={{ backgroundColor: `${isActive ? "red" : "blue"}` }}>
      partial that should be changed!!!
    </h3>
  );
};

export default memo(RRPH3Parcial);
