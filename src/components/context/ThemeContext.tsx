import { createContext, ReactNode } from "react";
import { theme } from "./Theme";

type ThemeContextProviderProps = {
    children: ReactNode
}

export const ThemeContext = createContext(theme); 

const ThemeContextProvider = (props: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;