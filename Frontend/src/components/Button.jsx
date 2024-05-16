export function Button(props){

    return (
            <button onClick={props.onClick} className="w-full py-2 px-4 bg-gray-950 text-neutral-50 rounded-md text-center hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-400 mt-4">
                {props.innerText}
            </button>
    )

}