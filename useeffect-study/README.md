# Using the Effect Hook

The Effect Hook lets you perform side effects in function components:

```js
useEffect(() => {},[]);
```
## Side Effects:
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.


There are two common kinds of side effects in React components:
- component that don’t require cleanup, and
- component  that require cleanup. 


## Effects Without Cleanup

To run some additional code after React has updated the DOM. 

Example :
- Network requests, 
- manual DOM mutations, and 
- logging 

```js
const BasicUseEffect = () => {
    const [value,setValue]=useState(0);
    useEffect(()=>{
        console.log("Running Effect");
        document.title =`New Message (${value})`
    })
    console.log("render component.");
  return (
    <div>
        <h2>New Messages {value}</h2>
        <button 
        onClick={()=>setValue(value + 1)}
        className='btn'>Click me</button>
    </div>
  )
}
export default BasicUseEffect
```