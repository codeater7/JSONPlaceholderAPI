import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link className = "home-link" to= "/" >
        HOME
      </Link>
    </header>
  );
}
