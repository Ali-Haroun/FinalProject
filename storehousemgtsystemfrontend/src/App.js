import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/authentication/PrivateRoute';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddItem from './items/AddItem';
import EditItem from './items/EditItem';
import ViewItem from './items/ViewItem';
import Login from './components/authentication/Login';
import MainPage from './items/MainPage'; // Check this path


function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/edititem/:id" element={<EditItem />} />
            <Route path="/viewitem/:id" element={<ViewItem />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/" element={<Login />} />
           <Route path="/mainpage" element={<PrivateRoute element={<MainPage />} />} />
          </Routes>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
