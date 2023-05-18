import { createContext, useState } from "react";
import getInitialState from "./MainContext";


export const MainContextState = createContext();

export function MainContextProvider ( { children }) {
    const [dataState, setDataState] = useState(getInitialState());
    
    return (
        <>
            <MainContextState.Provider  value={{ dataState, setDataState }}>
                { children }
            </MainContextState.Provider>
        </>
    );
}