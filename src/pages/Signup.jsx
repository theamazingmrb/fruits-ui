import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(import.meta.env.VITE_BACKENDURL +'/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        navigate('/login')
    })

  }

  const handleChange = e =>
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    
  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup Here</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={formState.username}
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        onChange={handleChange}
        value={formState.password}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Signup;
