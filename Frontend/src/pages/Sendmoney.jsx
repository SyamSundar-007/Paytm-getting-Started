import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Sendmoney(props) {

    const [searchparams] = useSearchParams()
    const userId = searchparams.get("id")
    const userName = searchparams.get("username")

    const [amount, setAmount] = useState(0)

    return <div className="h-screen flex justify-center items-center bg-neutral-100">
        <div className="w-2/6 p-5 px-10 h-2/4 rounded-lg shadow-lg shadow-grey-500 overflow-hidden bg-white">
            <Heading heading={"Send Money"} subHeading={"Transfer Securely"}></Heading>
            <div className="flex justify-start py-4">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-green-500">
                    <div className="text-white text-lg font-medium text-center">
                        {userName[0]}
                    </div>
                </div>
                <div className="text-lg h-full font-medium pl-4 align-bottom">
                   {userName}
                </div>
            </div>
            <Inputbox onChange={(e)=>{
                setAmount(e.target.value)
            }} labelname={"Amount (in Rs)"} placeholder={"Enter Amount"} />



            <Button onClick={()=>{
                axios.post("http://localhost:3000/api/v1/account/transfer",
                    {
                        "to":userId,
                        "amount":100
                    },{
                        headers:{
                            Authorization:"Bearer "+localStorage.getItem("token")
                        }
                    }
                )
            }}
             innerText={"Initiate Transfer"}></Button>

        </div>
    </div>



}

