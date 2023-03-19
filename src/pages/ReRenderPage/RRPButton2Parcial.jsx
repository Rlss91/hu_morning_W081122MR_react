import { memo } from "react";

const RRPButton2Parcial = ({ children, onClick }) => {
  console.log("btn 2 rerendered");
  return <button onClick={onClick}>{children}</button>;
};
export default memo(RRPButton2Parcial, (prevProps, nextProps) => true);
