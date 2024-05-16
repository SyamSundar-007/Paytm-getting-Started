import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"
import { Button } from "../components/Button"
import { Warning } from "../components/Warning"


export  function Signup(){
    console.log("Inside signup")
    return<div className="h-screen flex justify-center items-center bg-neutral-500">
        <div className="w-1/5 p-5 h-3/4 rounded-lg shadow-lg shadow-grey-500 bg-neutral-50 overflow-hidden">
        <Heading heading={"Sign Up"} subheading={"Enter your information to create an account"}/>
        <Inputbox labelname = {"First Name"} placeholder = {"Syam"}/>
        <Inputbox labelname = {"Last Name"} placeholder = {"Sundar"}/>
        <Inputbox labelname = {"Email"} placeholder = {"SyamSundar@gmail.com"}/>
        <Inputbox labelname = {"Password"}/>
        <Button innerText = {"Sign up"}></Button>
        <Warning labeltext={"Already have an account?"} buttontext={"Sign in"} to={"/signin"}></Warning>
        </div>
    </div>
}

