import React from "react";

function Toggler(props) {

   const clickTab = () => {
        props.changeParent();
    }
        return (
            <button onClick={() => {clickTab()}}> {props.buttonText}</button>
        )
    
}

export default Toggler