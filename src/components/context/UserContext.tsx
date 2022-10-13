import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

type AuthUser = {
    name: string,
}

type UserContext = {
    user: AuthUser | null,
    setUser: Dispatch<SetStateAction<AuthUser | null>>,
}

type UserContextProvider = {
    children: ReactNode,
}

export const UserContext = createContext({} as UserContext);

export const UserContextProvider = ({ children }: UserContextProvider) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}