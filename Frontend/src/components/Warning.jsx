import { Link } from "react-router-dom";

export function Warning(props){

    return(
        <div className="flex justify-center py-3">
            <div className="font-medium">
                {props.labeltext}
            </div>
            <Link className="cursor-pointer underline pl-2" to={props.to}>{props.buttontext}</Link>
        </div>
    )

}