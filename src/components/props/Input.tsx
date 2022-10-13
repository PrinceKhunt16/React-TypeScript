import { ChangeEvent } from "react";

type Input = {
    value: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const Input = (props: Input) => {
    return (
        <div>
            <input type='text' value={props.value} onChange={props.handleChange} />
        </div>
    )
}

export default Input;