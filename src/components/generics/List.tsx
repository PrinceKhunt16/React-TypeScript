type ListProps<T> = {
    items: T[],
    onClick: (value: T) => void,
}

type UserProps = {
    id: number,
    firstName: string,
    lastName: string
}

export const List = <T extends UserProps>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of Users</h2>
            {items.map(item => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        <h2>{item.firstName}{" "}{item.lastName}</h2>
                    </div>
                )
            })}
        </div>
    )
}
