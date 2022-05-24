import React,{useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";

const AddUser = ({onAddUser}) => {

    const [username,setUsername]=useState('')
    const [age, setAge] = useState('')
    const [error,setError]=useState();
    const usernameChangeHandler = (e)=>{
        setUsername(e.target.value);
    }
    const ageChangeHandler =(e)=>{
        setAge(e.target.value);
    }
    const addUserHandler=(e)=>{
        e.preventDefault();
        if(username.trim().length===0 || age.trim().length===0){
            setError({
                title:"Invalid input",
                message:"Please enter a valid name and age (non-empty values)"
            })
            return
        };

        if(+age < 1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid age ( > 0 )"
            })
            return;
        }
        onAddUser(username,age);
        setUsername('');
        setAge('');
    }
    const errorHandler=()=>{
        setError(null);
    }
  return (
   <>
  {error && <ErrorModal
    title={error.title}
    message={error.message}
    onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' value={username} onChange={usernameChangeHandler}/>

        <label htmlFor='age'>Age</label>
        <input type="number" id='age' value={age} onChange={ageChangeHandler}/>
        
        <Button type="submit">Add User</Button>
    </form>
    </Card>
   </>
  )
}

export default AddUser