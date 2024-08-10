import { useState } from "react";

function Task()
{
    const [mydata,setMyData]=useState("");
    const [submit,submited]=useState("");

    function display(e)
    {
        setMyData(e.target.value);
    }
    const handle = () =>
    {
        submited(mydata);
        setMyData('');
    }


return(
        <>
        <form action="">
            ENTER NAME:<input type="text" placeholder="ENTER NAME" value={mydata} onChange={display} />
            <input type="button" value="Submit" onClick={handle}/>
        </form>
        </>
);
}
export default Task;
