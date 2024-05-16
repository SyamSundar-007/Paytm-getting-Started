export const Balance = (props)=>{

    return(
        <div className="flex justify-start items-center h-16 p-4 text-sm font-bold ">
            <div className="mr-2">
            {props.label}
            </div>
            <div className="text-sm">
              Rs {props.balance}
            </div>

        </div>
    )

}