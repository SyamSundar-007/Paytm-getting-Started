import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export function Dashboard(){
    console.log("Inside Dashboard")
    return<div>
        <Appbar appName={"Paytm app"} userName ={"Syam Reddy"}></Appbar>
        <Balance label={"Your balance"} balance={9900}></Balance>
         <Users></Users>
    </div>
}

