import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler=(username,age)=>{
      setUsersList((prevUserslist)=>{
        return [...prevUserslist,{id:Math.random().toString(),name:username,age}]
      })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {usersList.length>0 &&<UserList users={usersList}/>}
    </div>
  );
}

export default App;
