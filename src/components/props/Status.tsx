type StatusProps = {
    status: 'loading' | 'success' | 'error',
}

const Status = (props: StatusProps) => {
    return (
        <h2>
            Status {" "}
            {
                props.status === 'loading' &&
                    'Loading'
            }
            {
                props.status === 'success' &&
                    'Success'
            }
            {
                props.status === 'error' &&
                    'Error'
            }
        </h2>
    )
}

export default Status