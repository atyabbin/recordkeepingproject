import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const addData = () => {
    setData((prevData) => [
      ...prevData,
      {
        email: email,
        user: user,
      },
    ]);
 setEmail("");
setUser("");
};
const removeData = (index) => {
  setData((prevData) => {
    const newData = [...prevData]; // Create a copy of the array
    newData.splice(index, 1); // Remove the element at the given index
    return newData;
  });
};

  return (
    <div className="App">
      <h1>RECORD KEEPING PROJECT</h1>
      <div>
        <TextField fullWidth label="Enter Email" id="fullWidth" value={email} onChange={handleEmail} />
      </div>

      <div id="userid">
        <TextField fullWidth label="Enter UserID" id="fullWidth" value={user} onChange={handleUser} />
      </div>
      <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={addData}>+</Button>
        
        </Stack>
      </div>
      <div className="data_val">
        <h4>Email</h4>
        <h4>UserID</h4>
        <h4>Remove</h4>
      </div>
      {data.map((element, index) => (
        <div className="final" key={index}>
          <h4>{element.email}</h4>
          <h4>{element.user}</h4>
         <Button variant="contained" onClick={()=>removeData(index)}>-</Button>
        </div>
      ))}
    </div>
  );
}

export default App;
