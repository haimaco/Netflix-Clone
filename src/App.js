import React from 'react';
import './App.css';
import Row from './components/Row' ;
import requests from './components/Requests';
import Banner from './components/Banner';

function App() {
  return (
    <div className='App'>
        {/* navbar */}
        <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}
      islargerow/>
      
      <Row title="Trading Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horor Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documetaries" fetchUrl={requests.fetchDocumantaries}/>
      
    </div>
  );
}
export default App;