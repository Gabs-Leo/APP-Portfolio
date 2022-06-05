import "./button.css"

interface ButtonProps {
    link?:string,
    type?:string,
    text:string

    size?:"long" | "short";
}

export const MyButton = (props:ButtonProps) => {
    if(props.type === "submit"){
        return (
            <div className="button" style={{width: `${props.size === "long" ? `100%` : `auto` }`}}>
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