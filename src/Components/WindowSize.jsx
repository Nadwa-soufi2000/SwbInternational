import { createContext, useEffect, useState } from "react";

export const Size = createContext(null);

export default function WindowContext({ children })
{
    const[windowSize , setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        
        function setWindowwidth() {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize" , setWindowwidth)

        return () => {
            window.removeEventListener("resize" , setWindowwidth)
        };

    }, [])

    return (
        <Size.Provider value={{ windowSize }}>{children}</Size.Provider>
    )
}