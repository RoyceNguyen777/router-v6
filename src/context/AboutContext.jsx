import { createContext, useMemo, useState } from "react";


// create Context
export const AboutContext = createContext()


// define Component Context
export const AboutProdiver = ({ children }) => {
    // define value 
    const [counter, setCounter] = useState(1)
    const myObject = {
        name: "Khương",
        age: 25
    }

    // create function return object 
    // useMemo 
    const value = useMemo(
        () => ({
            myObject,
            counter,
            setCounter
        }),
        [counter, setCounter]
    )

    return <AboutContext.Provider value={value}>{children}</AboutContext.Provider>
}
