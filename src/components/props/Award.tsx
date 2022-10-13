import { ReactNode } from "react"

type AwardProps = {
    children: ReactNode,
}

const Award = (props: AwardProps) => {
    return (
        <div>{props.children}</div>
    )
}

export default Award