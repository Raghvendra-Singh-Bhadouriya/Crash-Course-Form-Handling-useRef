import React,{useRef, useState} from "react";

function InputValid(){
    let inputRef = useRef(null);
    let [valid, setValid] = useState(false);

    function  handleValidation(){
        if(inputRef.current.value.length >= 5){
            setValid(true);
        }
        else{
            setValid(false);
        }
    }
    return(
        <>
        <h2>Real-time Input Validation</h2>

        <input
        ref = {inputRef}
        type = "text"
        placeholder = "Enter atleast 5 Characters"
        onChange = {handleValidation}
        style={{border:`5px solid ${valid ? "green" : "red"}`}}
        />

    <p style={{color: valid ? "green" : "red"}}>{valid ? "It's Valid" : "Input must contain atleast 5 characters"}</p>
        </>
    )
}

export default InputValid;