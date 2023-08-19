import React, { useState } from "react";
import styled from 'styled-components';

const Signup = () => {

const [ username, setUsername ] = useState("")
const [ email, setEmail ] = useState("")
const [ password, setPassword ] = useState("")

const collectData = async (req, res) => {
  let result = await fetch ("http://localhost:4000/Signin", {
    method : "POST",
    body : JSON.stringify({ username, email, password }),
    headers: { 'Content-Type' : 'application/json' },
 })
 console.log(result);
}


  return (
    <Wrapper>
    <div className="container">
      <h2>Create Account</h2>
      <div className="form-floating mb-3">
        <input
          type="username"
          value={username}
          className="form-control"
          id="floatingInput"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="your username"
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          value={email}
          className="form-control"
          id="floatingInput"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          value={password}
          className="form-control"
          id="floatingPassword"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div>
        <input className="btn btn-primary my-4 btn1" type="submit" onClick={collectData} value="Submit"/>
      </div>
    </div>
    </Wrapper>
  );
};


const Wrapper = styled.div`

.container{
  width: 40%;
  height: 80%;
  margin-top: 12rem;
  background: skyblue;
}


h2{
  color: red;
  font-size: 5;
}


.btn1{
  margin-left: 15rem;
}





`;

export default Signup;
