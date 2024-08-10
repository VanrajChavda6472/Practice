import { useState } from "react";
function StateA()
{
    const [state,setState] = useState(4);
function handleChange(e)
{
    console.log("Changed",e.target.value);
}
function handleclick()
{
    setState(state + 1);
}
    console.log("Re-render");
function handledecrement() 
{
    setState(state - 1);

}
    return(
    <>
    <h1>{state}</h1>
         <input placeholder="text" onChange={handleChange}/>
        <button onClick={handleclick}>increment</button>
        <button onClick={handledecrement}>decrement</button>
    </>      
    );
}
export default StateA;