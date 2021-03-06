import React from "react";
import { Home } from "./Home/_index.js";

function App() {
  return (
    <main className="container">
      <Home />
      <div id="credits">
        <a
          href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
          rel="noreferrer noopener"
        >
          Frontend Mentor Challenge
        </a>{" "}
        Coded by{" "}
        <a
          href="https://frontendmentor.io/profile/mcktivity"
          rel="noreferrer noopener"
        >
          Mcklien
        </a>
      </div>
    </main>
  );
}

export default App;
