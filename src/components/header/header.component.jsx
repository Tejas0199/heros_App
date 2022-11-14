import React, { useRef } from "react";
import "./header.style.css";

const Header = ({ setSearch }) => {
  const input = useRef(null);
  return (
    <div className="main-container">
      <header className="nav-container">
        <h1 className="app-name"><span>Vivasva</span> Super Hero's</h1>
        <div>
          <form onSubmit={(e) => {e.preventDefault()}}>
          <input
            ref={input}
            type="text"
            className="search-input"
            placeholder="Enter Super Hero's"
          />
          <button
            className="search-btn"
            onClick={() => {
              setSearch(input.current.value);
              input.current.value = "";
            }}
          >
            Search
          </button>
          </form>
            
        </div>
      </header>
    </div>
  );
};

export default Header;
