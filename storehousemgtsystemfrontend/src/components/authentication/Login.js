import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import './Login.css'; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: email,
        password: password,
      });

      console.log(response.data);

      if (response.data.message === "Admin not exists") {
        alert("Admin does not exist");
      } else if (response.data.message === "Login Success") {
        navigate('/mainpage');
      } else {
        alert("Incorrect Email and Password do not match");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid Credentials");
    }
  }
  
     
  return (
    <div className="login-container">
    <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

      <div className="login-form">
      <h2 className="text-center m-4">Login Here</h2>
        <hr />

          <form onSubmit={login}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              email
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
   </div>
  );
  
}

export default Login;
