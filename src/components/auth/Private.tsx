import { ComponentType } from "react"
import Login from "./Login"

type ProfileProps = {
    name: string,
}

type PrivateProps = {
    isLoggedIn: boolean,
    Component: ComponentType<ProfileProps>,
}

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Brave' />
    } else {
        return <Login />
    }
}

export default Private;