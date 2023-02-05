import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp'
import { Playlist } from './pages/Playlist';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/playlist" element={<Playlist />} />
    </Routes>
  );
}

export default App;
