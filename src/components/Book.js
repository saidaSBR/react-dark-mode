import React, { useContext } from "react";
import { ThemContext } from "../contexts/ThemeContext";
import "../styles.css";

const Book = ({ image, title, author }) => {
  const { isLightTheme, light, dark } = useContext(ThemContext);
  const theme = isLightTheme ? light : dark;
  return (
    <li>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="book-footer">
        <h3>{title}</h3>
        <p>By : {author}</p>
      </div>
    </li>
  );
};

export default Book;
