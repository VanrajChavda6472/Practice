import { useContext } from "react"
import { secondData,myData } from "../App";

function Context2()
{
    const data = useContext(myData);
    const data1 = useContext(secondData);
    return(
        <>
        comp2 {data}
        {data1}
        </>
    );
}
export default Context2;