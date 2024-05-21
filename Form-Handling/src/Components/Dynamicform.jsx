import {useRef} from "react";

function DynamicForm(){
    let inputRef1 = useRef(null);
    let inputRef2 = useRef(null);
    let inputRef3 = useRef(null);


    function handleInputFocus(e, inputRef){
        if(e.key === "Tab"){
            e.preventDefault();
            inputRef.current.focus()
        }
    }

    return(
        <>
        <h2>Dynamic Form Input Focus</h2>
        <input 
        ref={inputRef1} 
        type="text" 
        placeholder="Input 1"
        onKeyDown = {(e) => handleInputFocus(e,inputRef2)}
        />

        <input 
        ref={inputRef2} 
        type="text" 
        placeholder="Input 2"
        onKeyDown = {(e) => handleInputFocus(e, inputRef3)}
        />

        <input 
        ref={inputRef3} 
        type="text" 
        placeholder="Input 3"
        onKeyDown = {(e) => handleInputFocus(e, inputRef1)}
        />
        </>
    )
}

export default DynamicForm;