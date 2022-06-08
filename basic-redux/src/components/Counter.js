import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increase, increment, toggleCounter } from '../store/counter';

const Counter = () => {

  const counter = useSelector((state)=>state.counter.counter);
  const show = useSelector((state)=>state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  };

  const incrementHandler = ()=>{
    dispatch(increment())
  }
  const increaseHanlder = ()=>{
    dispatch(increase(5))
  }
  const decrementHandler=()=>{
    dispatch(decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHanlder}>Increase </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
