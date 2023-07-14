
import './App.scss';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Home from '../src/components/Home/Home'
import MovieDetail from '../src/components/MovieDetail/MovieDetail'
import PageNotFound from '../src/components/PageNotFound/PageNotFound'
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/movie/:imdbID" exact element={<MovieDetail/>}/>
          <Route element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
