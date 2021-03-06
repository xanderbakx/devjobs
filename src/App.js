// import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App bg-lightgrey dark:bg-midnight">
      <Header />
      <SearchBar />
      <Grid />
    </div>
  );
}

export default App;
