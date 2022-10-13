import { useState } from 'react'

type UserProps = {
    name: string,
}

const User = () => {
    const [user, setUser] = useState<UserProps | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'Brave',
        });
    }

    const handleLogout = () => {
        setUser(null);
    }

    return (
        <div>
            {
                user?.name ? 
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <h2>Hi {user?.name}, you are logged in.</h2>
                    </> :
                    <>
                        <button onClick={handleLogin}>Login</button>
                    </>
            }
        </div>
    )
}

export default User