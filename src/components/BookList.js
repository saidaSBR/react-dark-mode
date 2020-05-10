import React, { useContext, useState } from "react";
import "../styles.css";
import { books } from "./BooksData";
import { ThemContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li style={{ background: theme.ui }} key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
