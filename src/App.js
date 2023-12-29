import { Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import MoviesPage from './pages/MoviesPage';
import Series from './pages/Series';
import Search from './pages/Search';
import Notifications from './pages/Notifications';
import Watch from './pages/Watch';
import Profile from './pages/Profile';


function App() {
  
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/series' element={<Series />} />
        <Route path='/search' element={<Search />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/watch/:movie_id' element={<Watch />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;