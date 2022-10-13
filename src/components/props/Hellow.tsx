type HellowProps = {
    name: string,
    number: number,
    quilified?: boolean,
}

const Hellow = (props: HellowProps) => {
    return (
        <div>
            <h2>
                Welcome {props.name}! 
                Your number is {props.number}. 
                {props.quilified &&  
                    <> 
                        You are {props.quilified ? 'selected' : 'not selected'} 
                    </>
                }
            </h2>
        </div>
    )
}

export default Hellow
