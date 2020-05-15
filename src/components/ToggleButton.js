import React, { useContext } from "react";
import "../styles.css";
import { ThemContext } from "../contexts/ThemeContext";
import { Switch } from "antd";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness3RoundedIcon from "@material-ui/icons/Brightness3Rounded";

const ToggleButton = () => {
  const { toggleTheme } = useContext(ThemContext);
  return (
    <Switch
      className="toggle-button"
      checkedChildren={<Brightness3RoundedIcon onClick={toggleTheme} />}
      unCheckedChildren={<Brightness4RoundedIcon onClick={toggleTheme} />}
      defaultChecked
    />
  );
};

export default ToggleButton;
