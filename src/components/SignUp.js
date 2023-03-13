import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Auth from "./Auth";
import "./App.css"

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div className="Auth-form-container">
          {" "}
          {login ? (
            <form className="Auth-form" onSubmit={handleFormSubmit}>
              <div className="Auth-form-content">
              <h3 className="Auth-form-title">SignUp</h3>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Choose your Gender</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                 </Form.Control>
              </div>
          <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              </div>
              <p onClick={handleClick}  >
                Already registered{" "}<span className="link-primary">log in?</span>
               </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
              </div>
            </form>
          ) : (
            <Auth />
          )}
        </div>
    
    </>
  );
}

export default SignUp;

// import React, { useState } from 'react';
// import { useNavi } from 'react-router-dom';
// import usersData from './users.json';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const history = useNavi();

//   const handleCreateAccount = (e) => {
//     e.preventDefault();

//     const newUser = { username, password, email };

//     const existingUser = usersData.users.find((u) => u.username === username || u.email === email);

//     if (existingUser) {
//       alert('Username or email already exists');
//     } else {
//       usersData.users.push(newUser);
//       alert('Account created successfully');
//       history.push('/login');
//     }
//   };

//   return (
//     <form onSubmit={handleCreateAccount}>
//       <h1>Create Account</h1>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//   <button type="submit">Create Account</button>
// </form>
// );
// };

// export default SignUp;