import { useEffect, useState } from "react";
 
function Form1()
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");

    const [nameerror,setNameError] = useState("");
    const [emailerror,setEmailError] = useState("");
    const [contacterror,setContantError] =  useState("");


   function getName(e)
   {
    setName(e.target.value);
   }
   function getEmail(e)
   {
    setEmail(e.target.value);
   }
   function getContact(e)
   {
    setContact(e.target.value);
   }
    
   function valid(e){
    e.preventDefault()
     if(name.length === 0){
        setNameError("*NAME IS REQUED");
    }
    else{
        setNameError("");
    }
    if(email.length === 0){
        setEmailError("*email IS REQUED");
    }
    else{
        setEmailError("");
    }
    if(contact.length === 0){
        setContantError("*pass IS REQUED");
    }
    else{
        setContantError(" ");
    }
  }
    return(
        <>
        <form>
        <label>ENTER NAME</label> 
        <input type="text" style={{margin :"10px"}} value={name} onChange={getName}></input>
        <p style={{"color":"red","height":"15px"}}>{nameerror}</p>
        <br/>
        <label>ENTER EMAIL</label> 
        <input type="text" style={{margin :"10px"}} value={email} onChange={getEmail}></input>
        <p style={{"color":"red","height":"15px"}}>{emailerror}</p>
        <br/>
        <label>ENTER CONTACT</label> 
        <input type="text" style={{margin :"10px"}} value={contact} onChange={getContact}></input> 
        <p style={{"color":"red","height":"15px"}}>{contacterror}</p>
        <br/>
       {/* <input type="Submit" }>CLICk</input>  */}
        <button onClick={valid}>CLICk</button>
        </form>
        </>
    );
}

export default Form1;