export function Inputbox(props) {

    return (
        <div className="mb-4">
            <label className="block mb-2 font-medium text-sm"> {props.labelname}</label>
            <input type="text" placeholder={props.placeholder } className="w-full border-2 border-grey-500 rounded-md p-1 placeholder:text-grey-500"></input>
        </div>
    )

}