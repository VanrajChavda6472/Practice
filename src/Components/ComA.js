 import ComB from './ComB';
function ComA(props)
{
    console.log("ComA",props);
    return(
    <>
    <p> nice meet you {props.mydata}</p>
    {/* <h3>ComA</h3> */}
    <ComB seconddata={props.mydata}/>
    </>
    );
}
export default ComA;