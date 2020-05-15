import React from "react";
import ReactDOM from "react-dom";
import ThemContextProvider from "./contexts/ThemeContext";
import ToggleButton from "./components/ToggleButton";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="App">
      <ThemContextProvider>
        <ToggleButton />
        <BookList />
      </ThemContextProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

