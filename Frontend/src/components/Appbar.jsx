export function Appbar(props) {

    return (
        <div className="shadow h-14 flex justify-between p-2">
            <div className="font-sans text-2xl font-bold text-blue-500">{props.appName}</div>
            <div className="flex">
                <div className="font-sans h-full text-xl font-meduim px-4 mt-1">
                    {props.userName}
                </div>
                <div className="flex justify-center items-center  w-10 h-10 rounded-full px-4 bg-slate-400 px-4">
                    <div className="text-white text-xl">
                        {props.userName[0]}
                    </div>
                </div>
            </div>
        </div>
    )

}