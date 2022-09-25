import logo from './logo.svg';
import './App.css';
import User from './pages/User';
import { Route, Routes, Link } from 'react-router-dom';
import EditUser from './components/editUser';
import Pagination from './components/Pagination';
import ListPagination from './pages/ListPagination';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link> */}
          <Route path="/" element={<User />} />
          <Route path="/pagination" element={<ListPagination />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
