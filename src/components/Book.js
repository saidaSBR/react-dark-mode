import React from "react";
import "../styles.css";

const Book = ({ image, title, author }) => {
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
