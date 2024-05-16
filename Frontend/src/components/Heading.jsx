export function Heading(props) {

    return (
        <div>
            <div className="font-inter text-3xl font-bold text-center">
                {props.heading}
            </div>
            <div className=" font-sans text-base font-medium text-sub-color text-center">
           {props.subheading}
            </div>
        </div>
    )

}