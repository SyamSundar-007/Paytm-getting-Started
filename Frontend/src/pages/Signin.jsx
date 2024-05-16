import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"
import { Button } from "../components/Button"
import { Warning } from "../components/Warning"


export  function Signin(){
    console.log("Inside signup")
    return<div className="h-screen flex justify-center items-center bg-neutral-500">
        <div className="w-1/5 p-5 h-3/6 rounded-lg shadow-lg shadow-grey-500 bg-neutral-50 overflow-hidden">
        <Heading heading={"Sign In"} subheading={"Enter your Credentials to access your account"}/>
        <Inputbox labelname = {"Email"} placeholder = {"SyamSundar@gmail.com"}/>
        <Inputbox labelname = {"Password"}/>
        <Button innerText = {"Sign In"}></Button>
        <Warning labeltext={"Don't have an account?"} buttontext={"Sign up"} to={"/signup"}></Warning>
        </div>
    </div>
}