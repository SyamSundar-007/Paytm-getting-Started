import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"
import { Button } from "../components/Button"
import { Warning } from "../components/Warning"
import { useState } from "react"
import axios from 'axios'


export  function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return<div className="h-screen flex justify-center items-center bg-neutral-500">
        <div className="w-1/5 p-5 h-3/4 rounded-lg shadow-lg shadow-grey-500 bg-neutral-50 overflow-hidden">
        <Heading heading={"Sign Up"} subheading={"Enter your information to create an account"}/>
        <Inputbox onChange = {e=>{
            setFirstName(e.target.value);
        }} labelname = {"First Name"} placeholder = {"Syam"}/>

        <Inputbox onChange = {e=>{
            setLastName(e.target.value)
        }} labelname = {"Last Name"} placeholder = {"Sundar"}/>

        <Inputbox onChange = {e=>{
            setUsername(e.target.value)
        }}labelname = {"Email"} placeholder = {"syamsundar@gmail.com"}/>

        <Inputbox onChange = {e=>{
            setPassword(e.target.value)
        }} labelname = {"Password"}/>
         {console.log(username)}
        <Button onClick = {async()=>{

         const response =  await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,
                firstName,
                lastName,
                password
            })

            const token = response.data.token
            localStorage.setItem("token",token)

            // fetch("http://localhost:3000/api/v1/user/signup",{
            //     method:"POST",
            //     body:JSON.stringify({
            //         username,
            //         firstName,
            //         lastName,
            //         password
            //     })
            // })

        }} innerText = {"Sign up"}></Button>
        <Warning labeltext={"Already have an account?"} buttontext={"Sign in"} to={"/signin"}></Warning>
        </div>
    </div>
}

