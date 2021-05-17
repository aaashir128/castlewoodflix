import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './config/requests';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Original" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
