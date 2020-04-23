import React from "react";
import { useHistory } from "react-router-dom";
const Goback = ({ children }) => {
  let history = useHistory();
  return (
    <img
      src="https://www.flaticon.com/premium-icon/icons/svg/2475/2475440.svg"
      alt="go back "
      className="goback"
      onClick={() => history.goBack()}
    />
  );
};

export default Goback;
