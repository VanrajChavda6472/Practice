import axios from "axios";
import { useEffect,useState } from "react";


function Apicalling()
{
    const [myData,setMyData]=useState([]);
    async function apidata()
    {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        setMyData(data.data);
    }
    useEffect(()=>{
    apidata();
    },[]);

    return(
        <>
        <h2>api data</h2>
        <h3>
            {myData.map((val,index)=>{
                return(
                    <>
                    <h2>{val.name}</h2>
                    <h2>{val.users}</h2>
                    </>
                );
            }
        )}
     </h3>  
        
        </>
    );
}
export default Apicalling;