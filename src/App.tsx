import { requests } from "./request";
import { Row } from "./components/Row";

function App() {
  return (
    <div>
      <div className="App">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />

        <Row
          title="NETFLIX ORIGINALS(小さい画像)"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={false}
        />
      </div>
    </div>
  );
}

export default App;
