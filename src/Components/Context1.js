import { useContext } from "react"
import { secondData,myData } from "../App";
import Context2 from "./Context2";

function Context1()
{
    const data = useContext(myData);
    const data1 = useContext(secondData);
    return(
        <>
        comp1 {data}
        {data1}
        <Context2/>
        </>
    );
}
export default Context1;