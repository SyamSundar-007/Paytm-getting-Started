import { Heading } from "../components/Heading";
import { Inputbox } from "../components/Inputbox";
import { Button } from "../components/Button";

export function Sendmoney(props) {

    return <div className="h-screen flex justify-center items-center bg-neutral-100">
        <div className="w-2/6 p-5 px-10 h-2/4 rounded-lg shadow-lg shadow-grey-500 overflow-hidden bg-white">
            <Heading heading={"Send Money"} subHeading={"Transfer Securely"}></Heading>
            <div className="flex justify-start py-4">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-green-500">
                    <div className="text-white text-lg font-medium text-center">
                        S
                    </div>
                </div>
                <div className="text-lg h-full font-medium pl-4 align-bottom">
                    Syam Sundar
                </div>
            </div>
            <Inputbox labelname={"Amount (in Rs)"} placeholder={"Enter Amount"} />



            <Button innerText={"Initiate Transfer"}></Button>

        </div>
    </div>



}

