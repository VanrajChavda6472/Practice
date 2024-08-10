import ComC from './ComC';
function ComB(props)
{
    return(
        <>
        <p> will you help you {props.seconddata}</p>
        <ComC thirddata={props.seconddata}/>
        </>
    );
}
export default ComB;