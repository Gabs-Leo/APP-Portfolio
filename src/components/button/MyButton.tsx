import "./button.css"

interface ButtonProps {
    link?:string,
    type?:string,
    text:string
}

export const MyButton = (props:ButtonProps) => {
    if(props.type === "submit"){
        return (
            <div className="button">
                <input type="submit" value={props.text} />
            </div>
        )
    }
    return (
        <div className="button">
            <a href={props.link || "javascript:void(0)"}>{props.text}</a>
        </div>
    )
}