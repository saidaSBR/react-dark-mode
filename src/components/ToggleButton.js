import React, {Component} from "react";
import "../styles.css";
import {ThemContext} from "../contexts/ThemeContext";
import { Switch } from 'antd';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';

class ToggleButton extends Component {
  static contextType = ThemContext;
  render() {
    const { toggleTheme } = this.context;
    return    <Switch
            checkedChildren={<Brightness3RoundedIcon  onClick={toggleTheme}/>}
            unCheckedChildren={<Brightness4RoundedIcon onClick={toggleTheme}/>}
            defaultChecked
        />
  }
}

export default ToggleButton;
