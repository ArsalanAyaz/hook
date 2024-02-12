"use client"
import { useState } from "react";
import { Print } from "./components/print";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");

  const onChangeHandler = (event:any) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const onChangeHandler2 = (event:any) => {
    console.log(event.target.value);
    setemail(event.target.value);
  };





  return (
    <>
      
      <input type="text" onChange={onChangeHandler}/>
      <br/>
      <input type="text" onChange={onChangeHandler2}/>
      
      <Print title={{name,email}}/>
    </>
  );
}

