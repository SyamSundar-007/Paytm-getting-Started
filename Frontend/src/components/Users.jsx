import { useState } from "react"
import { Button } from "./Button"

export const Users = (props) => {

    const [users, setusers] = useState([{
        firstName: "Syam",
        lastName: "Sundar",
        _id: 1
    },{
        firstName: "Syam",
        lastName: "Sundar",
        _id: 1
    }])

    return (
        <div className=" px-6">
            <div className="text-lg font-medium">Users</div>
            <div className="flex h-full justify-center  py-2">
                <input type="text" placeholder="Search User....." className="w-full h-6 rounded border-b-2 border-gray-500  text-medium focus:outline-none focus:ring-2 ring-gray-500 "></input>
            </div>
            <div>
                {users.map((val) => <User user={val}/>)}
            </div>

        </div>
    )
}



function User(props) {

    const colorArray =["-gray-200","-green-200","-red-200","-blue-200"]
    const ranColor = colorArray[Math.floor(Math.random() * (3 - 0 + 1) ) + 0]
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-start">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200">
                    <div className="text-black-500 text-lg font-medium text-center">
                        {props.user.firstName[0]}
                    </div>
                </div>
                <div className="text-lg h-full font-medium pl-4 align-bottom">
                    {`${props.user.firstName} ${props.user.lastName}`}
                </div>
            </div>
            <div className="w-30 h-20" >
                <Button innerText={"Send Money"}></Button>
            </div>
        </div>
    )

}