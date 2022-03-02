import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";

function App() {
  return (
    <div className="App bg-lightgrey dark:bg-darkblue">
      <Header />
      <SearchBar />
      <Grid />
    </div>
  );
}

export default App;
