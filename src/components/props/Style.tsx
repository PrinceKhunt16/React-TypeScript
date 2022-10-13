import { CSSProperties } from "react"

type Status = {
    styles: CSSProperties,
}

const Style = (props: Status) => {
    return (
        <div>
            <h2 style={props.styles}>This is box</h2>
        </div>
    )
}

export default Style