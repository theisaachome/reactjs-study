import React,{useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from "./AddUser.module.css";

const AddUser = () => {

    const [username,setUsername]=useState('')
    const [age, setAge] = useState('')
    const usernameChangeHandler = (e)=>{
        setUsername(e.target.value);
    }
    const ageChangeHandler =(e)=>{
        setAge(e.target.value);
    }
    const addUserHandler=(e)=>{
        e.preventDefault();
        if(username.trim().length===0 || age.trim().length===0)return;

        if(+age < 1){
            return;
        }
        console.log(username,age) ;

        setUsername('');
        setAge('');
    }
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' onChange={usernameChangeHandler}/>

        <label htmlFor='age'>Age</label>
        <input type="number" id='age' onChange={ageChangeHandler}/>
        
        <Button type="submit">Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser