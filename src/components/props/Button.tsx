import { MouseEvent } from "react"

type ButtonProps = {
  sayHyy: (event: MouseEvent<HTMLButtonElement>, id: number) => void,
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.sayHyy(event, 1)}>Hay</button>
    </div>
  )
}

export default Button