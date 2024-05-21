import { useRef, useState } from "react";


function CustomForm(){
    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let passwordRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();

        let formData = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value
        }

        if(formData){
            if(formData.password.length < 6){
                alert("dslfjdskfldjf");   
            }else{
                alert("Your data has submited")
                console.log(formData)
            } 
        }

        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }


    return(
        <>
        <h2>Custom Form Submission Handling</h2>

        <form onSubmit={handleSubmit}>

        <input 
        ref={nameRef} 
        type="text" 
        placeholder="Enter Name"
        required
        /><br/>

        <input 
        ref={emailRef} 
        type="email" 
        placeholder="Enter Email"
        required
        /><br/>

        <input 
        ref={passwordRef} 
        type="password" 
        placeholder="Enter atleast 6 digit password"
        required
        /><br/>

        <input
        type="submit"
        />
        
        </form>
        </>
    )
}

export default CustomForm;