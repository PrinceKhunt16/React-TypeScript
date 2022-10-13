import { CSSProperties } from "react"

type StatusProps = {
    styles: CSSProperties,
}

const Style = (props: StatusProps) => {
    return (
        <div>
            <h2 style={props.styles}>This is box</h2>
        </div>
    )
}

export default Style