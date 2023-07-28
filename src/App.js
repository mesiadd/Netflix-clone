import React from "react";
import Row from "./Row";
import requests from "./requests";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
      <Row title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />

      <Row title="TV" fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default App;
// import './App.css';
// import requests from "./requests"
// import Row from './Row';


// function App() {
//   return (
//     <div className="App">
//       <Row
//         title="NETFLIX ORIGINALS"
//         fetchUrl={requests.fetchNetflixOriginals}
//       />
//       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
//     </div>
//   );
// }

// export default App;
