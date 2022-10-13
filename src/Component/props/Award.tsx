import { ReactNode } from "react"

type Award = {
    children: ReactNode
}

const Award = (props: Award) => {
    return (
        <div>{props.children}</div>
    )
}

export default Award