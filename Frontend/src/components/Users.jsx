import { useState } from "react"
import { Button } from "./Button"
import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Users = (props) => {

    const [users, setUsers] = useState([])
    const [filterdata, setFilterData] = useState("")

       useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filterdata)
       .then(response =>{
        setUsers(response.data.user)
       })
      
    
    },[filterdata])

//    console.log(users)
    return (
        <div className=" px-6">
            <div className="text-lg font-medium">Users</div>
            <div className="flex h-full justify-center  py-2">
                <input onChange={(e)=>{
                    setFilterData(e.target.value)
                }} type="text" placeholder="Search User....." className="w-full h-6 rounded border-b-2 border-gray-500  text-medium focus:outline-none focus:ring-2 ring-gray-500 "></input>
            </div>
            <div>
                {console.log(users)}
                {users.map((val) => <User user={val}/>)}
            </div>

        </div>
    )
}



function User(props) {

    const navigate = useNavigate()

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
                <Button onClick = {()=>{
                     navigate("/send?id="+props.user._id+"&username="+props.user.firstName)
                }} innerText={"Send Money"}></Button>
            </div>
        </div>
    )

}