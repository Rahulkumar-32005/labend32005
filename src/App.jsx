
import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  function register(e) {
    e.preventDefault();
    setMsg("Welcome " + name);
  }

  function login(e) {
    e.preventDefault();

    if(user === "student" && pass === "1234")
      setMsg("Login Successful");
    else
      setMsg("Invalid Login");
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={register}>
        <input placeholder="Enter Name"
          onChange={e => setName(e.target.value)} />
        <button>Register</button>
      </form>

      <h2>Login Form</h2>
      <form onSubmit={login}>
        <input placeholder="Username"
          onChange={e => setUser(e.target.value)} />
        <input type="password" placeholder="Password"
          onChange={e => setPass(e.target.value)} />
        <button>Login</button>
      </form>

      <h3>{msg}</h3>
    </div>
  );
}

export default App;
