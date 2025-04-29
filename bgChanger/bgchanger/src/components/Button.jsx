import React, { useState } from "react";

function Button(props) {

    return (
        <div className="flex flex-wrap justify-center bottom-12 inset-x-10/12 px-2 py-2">
            <button
            className="outline-none px-4 py-1 rounded-full" 
            style={{backgroundColor: props.btn, color: "white"}}>
                {props.btn}
            </button>
        </div>
    )
}

            
export default Button;
