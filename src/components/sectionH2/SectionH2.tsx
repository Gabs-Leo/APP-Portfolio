interface H2Props {
    text:string
    color?:string
}
export const SectionH2 = (props:H2Props) => {
    const cssCustomization:React.CSSProperties = {fontSize: `60px`}
    if(props.color === "base"){
        cssCustomization.color = `var(--baseColor)`
    }
    return <h2 data-aos-mirror="true" data-aos="fade-right" data-aos-duration="1600" className="mb-3" style={cssCustomization}>{props.text}</h2>
}