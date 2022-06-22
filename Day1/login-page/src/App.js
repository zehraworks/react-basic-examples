import './App.css';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Form from './components/form/Form';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({name: "", password:""})
  const handleChange = (e) => {
    if (e.target.type==="text") {
      setUser({...user, name: e.target.value})
    } else {
      setUser({...user, password: e.target.value})
    }
  }
  const handleClick = () => {
    if(user.name==="") {
      alert("Please, write your username!")
    }
    else if (user.password==="") {
      alert("Please, write your password!")
    }
  }
  return (
    <div className="App">
      <h2> Login Form </h2>
      <Form>
      <Input type={"text"} placeHolder={"Username"} onChange={handleChange} value={user.name}/>
      <Input type={"password"} placeHolder={"Password"} onChange={handleChange} value={user.password}/>
      <Button onClick={handleClick}/>
      </Form>
    </div>
  );
}

export default App;
