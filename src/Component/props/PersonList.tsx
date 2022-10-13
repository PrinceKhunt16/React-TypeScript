type PersonList = {
    nameList: {
        firstName: string,
        lastName: string
    }[]
}

const PersonList = (props: PersonList) => {
    return (
        <div>
            {props.nameList.map(name => {
                return (
                    <h2 key={name.firstName}>
                        {name.firstName}{" "}{name.lastName}
                    </h2>
                )
            })}
        </div>
    )
}

export default PersonList