import { MouseEvent } from "react"

type Button = {
    sayHyy: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: Button) => {
  return (
    <div>
        <button onClick={(event) => props.sayHyy(event, 1)}>Hay</button>
    </div>
  )
}

export default Button