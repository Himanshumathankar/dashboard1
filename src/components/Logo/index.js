/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LogoIcon } from "../LogoIcon";
import "./style.css";

export const Logo = ({
  color,
  className,
  logoIconColorDarkClassName,
  logoIconExclude = "https://c.animaapp.com/v7xIVJH6/img/exclude-5.svg",
}) => {
  return (
    <div className={`logo ${className}`}>
      {color === "logo-dark" && (
        <>
          <div className="group-wrapper">
            <div className="exclude-wrapper">
              <img
                className="img"
                alt="Exclude"
                src="https://c.animaapp.com/v7xIVJH6/img/exclude-3.svg"
              />
            </div>
          </div>

          <div className="div">Dashdark X</div>
        </>
      )}

      {color === "logo-white" && (
        <>
          <LogoIcon
            className={logoIconColorDarkClassName}
            color="white"
            exclude={logoIconExclude}
            excludeClassName="logo-icon-instance"
          />
          <div className="text-wrapper-2">Dashdark X</div>
        </>
      )}
    </div>
  );
};

Logo.propTypes = {
  color: PropTypes.oneOf(["logo-dark", "logo-white"]),
  logoIconExclude: PropTypes.string,
};
