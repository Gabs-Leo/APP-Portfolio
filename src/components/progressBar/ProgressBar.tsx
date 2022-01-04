import "./progressbar.css"

interface ProgressBarProps{
    title:string,
    percentage:number
}

export const ProgressBar = (props:ProgressBarProps) => {
    return (
        <>
        <div className="progressTitle">
            <h4 className="mb-1">{props.title}</h4>
            <h4 className="mb-1">{props.percentage}%</h4>
        </div>
        
        <div className="progressBar">
            <div className="progress" style={{width: `${props.percentage}%`}}>
            </div>
        </div>
        </>
    )
}