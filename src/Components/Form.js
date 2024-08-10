import {  useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [pass, setPass] = useState("");

  const [error , setError] = useState("");
  const [mailerror , setmailError] = useState("");
  const [passerror , setpassError] = useState("");
  
  function getValname(e) {
    setName(e.target.value);
  }
  function getmailname(e){
    setmail(e.target.value);
  }
  function getpassvalue(e){
    setPass(e.target.value);
  }
  function valid() {
    if (name.length === 0) {
      setError("*Name is Reuired");
    }
    else{
        setError("");
    }
    if(mail.length === 0){
        setmailError("*Email is Required")
    }
    else{

        setmailError("");
    }
    if(pass.length === 0){
        setpassError("*Password is Required")
    }
    else{
        
        setpassError("");
    }
  }

  return (
    <>
      
        
        <label>Enter Name : </label>
        <input type="text" style={{ margin: "10px" }} value={name} onChange={getValname}></input>
        <p style={{"color":"red","height":"15px"}}>{error}</p>


        <label>Enter Email : </label>
        <input  type="text" value={mail} style={{ margin: "10px" }} onChange={getmailname}></input>
        <p style={{"color":"red","height":"15px"}}>{mailerror}</p>
        <label>Enter Password : </label>


        <input type="password" value={pass} style={{ margin: "10px" }} onChange={getpassvalue} ></input>
        <p style={{"color":"red","height":"15px"}}>{passerror}</p>
      
        <button onClick={valid} >Submit</button>
    </>
  );
}
export default Form;