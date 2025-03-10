import React from "react";
import { Button } from "@mui/material";
import "./Error404.css";

export default function Error404() {
  return (
    <div className="align-middle some flex justify-center px-auto py-auto  max-h-screen overflow-hidden">
    <div className="noise"></div>
    <div className="overlay"></div>
    <div className="terminal my-auto py-auto min-h-screen">
      <h1>
        Error <span className="errorcode">404</span>
      </h1>
      <p className="output">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <p className="output">
        Please try to <a href="/">go back</a> or
        <a href="/"> return to the homepage</a>.
      </p>
      <p className="output">Good luck.</p>
    </div>
    </div>
  );
}
