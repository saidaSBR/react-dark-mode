import React, { useContext } from "react";
import "../styles.css";
import { books } from "./BooksData";
import { ThemContext } from "../contexts/ThemeContext";
import Book from "./Book";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <h1>Books List</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
