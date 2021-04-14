import React, { useContext } from "react";
import "../styles.css";
import { ThemContext } from "../contexts/ThemeContext";
import { Switch } from "antd";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import Brightness3RoundedIcon from "@material-ui/icons/Brightness3Rounded";

const ToggleButton = () => {
  const { toggleTheme, isLightTheme, light, dark } = useContext(ThemContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Switch
      className="toggle-button"
      style={{ background: theme.bg }}
      onClick={toggleTheme}
      checkedChildren={<Brightness3RoundedIcon />}
      unCheckedChildren={<Brightness4RoundedIcon />}
      defaultChecked
    />
  );
};

export default ToggleButton;
