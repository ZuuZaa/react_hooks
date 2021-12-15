import { useState } from 'react';
import './App.css';
import Counter from './components/counter';
import usersData from './components/users/data';
import UserContext from './components/context/userContext';
import UserList from './components/users/user_list';



function App() {

  const [show, setShow] = useState(true);
  const [users, setUsers] = useState(usersData);
  const changeColor = (id, color) =>
  setUsers(
    users.map(user => (user.id === id ? { ...user, color: color } : user))
  );


  return (
    <div className="App">
      <h1>useState and useEffect</h1>
      <button onClick={() => setShow(!show)}>Toggle Button</button>

      <div>
        {show && <Counter />}
      </div>

      <UserContext.Provider value="deyer">
        <h1>User Context</h1>
        <UserList usersList={users} changeColor={changeColor} />
      </UserContext.Provider>

    </div>




  );
}

export default App;
