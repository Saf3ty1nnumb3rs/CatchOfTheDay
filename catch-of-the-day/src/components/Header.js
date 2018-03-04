import React, { Component } from "react";



//Example of stateless functional component - notice arrow function with implicit return(no curly boys) and props
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
      {/* tagline property assigned AND passed down within Header tag in App.js */}
    </h3>
  </header>
);

export default Header;
