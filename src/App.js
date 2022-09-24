import logo from './logo.svg';
import './App.css';
import User from './pages/User';
import { Route, Routes, Link } from 'react-router-dom';
import EditUser from './components/editUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
