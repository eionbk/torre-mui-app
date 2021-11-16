
import './App.css';
import Landing from './components/Landing/Landing';
import UserDetails from './components/UserDetails/UserDetails';
import SearchBar from './components/SearchBar/SearchBar';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>

          <Route exact path="/" element={<>
            <SearchBar />
            <Landing /></>} />
          <Route exact path="/Details" element={<UserDetails />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
