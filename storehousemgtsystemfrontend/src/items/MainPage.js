// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Welcome back</h2>

          <Link to="/home" className="btn btn-primary login-btn">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
