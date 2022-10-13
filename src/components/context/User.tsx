import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        userContext.setUser({
            name: 'Brave',
        });
    }

    const handleLogout = () => {
        userContext.setUser(null);
    }

    return (
        <div>
            {
                userContext.user?.name ? 
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <h2>Hi {userContext.user?.name}, you are logged in.</h2>
                    </> :
                    <>
                        <button onClick={handleLogin}>Login</button>
                    </>
            }
        </div>
    )
}

export default User;