
import './App.css'
import { Movies } from './components/Movies';
import { FormSearch } from './components/FormSearch';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import{MainPage} from './components/MainPage';
import { SingleMovie } from './components/SingleMovie';

function App() {
  //http://www.omdbapi.com/?i=tt3896198&apikey=6dfa331b

  //http://www.omdbapi.com/?apikey=6dfa331b&s=avengers

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/movies/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
