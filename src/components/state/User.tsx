import { useState } from 'react'

type Name = {
    name: string,
}

const User = () => {
    const [name, setName] = useState<Name | null>(null);

    const handleLogin = () => {
        setName({
            name: 'Brave',
        });
    }

    const handleLogout = () => {
        setName(null);
    }

    return (
        <div>
            {
                name?.name ? 
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <h2>Hi {name?.name}, you are logged in.</h2>
                    </> :
                    <>
                        <button onClick={handleLogin}>Login</button>
                    </>
            }
        </div>
    )
}

export default User