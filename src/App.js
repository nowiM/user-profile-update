import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    date: '',
    location: '',
    cell: '',
    login: ''
  });

  useEffect(() => {
    getUserInfo();
  }, [])  

  const getUserInfo = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const user = data.results[0];

    console.log(data)

    setUserInfo({
      name: {
        first: user.name.first,
        last: user.name.last
      },

      email: user.email,

      date: user.dob.date,

      location: {
        postcode: user.location.postcode,
        city: user.location.city
      },

      cell: user.cell,

      login:  {
        id: user.login.username,
        password: user.login.password,
      }
    })
  }

  console.log(userInfo);
  
  return (
    <div className="App">
      <h1 className="title">User Information</h1>

      {userInfo.name && <span>{`Name: ${userInfo.name.first} ${userInfo.name.last}`}</span>}
      {userInfo.email && <span>{`Email: ${userInfo.email}`}</span>}
      {userInfo.date && <span>{`Birthday: ${userInfo.date}`}</span>}
      {userInfo.location && <span>{`Address : ${userInfo.location.postcode} ${userInfo.location.city}`}</span>}
      {userInfo.cell && <span>{`Phone: ${userInfo.cell}`}</span>}
      {userInfo.login && <span>{`Id: ${userInfo.login.id} Password : ${userInfo.login.password}`}</span>}
    </div>
  );
}

export default App;
