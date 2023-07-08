import React, { useState } from "react"; 

 const UseStateComponent = () => {
    if(true) {
        const [color1, setColor1] = useState("red");
    }
    const [color, setColor] = useState("red");


    


  return <h1>My favorite color is {color}!</h1>


 }