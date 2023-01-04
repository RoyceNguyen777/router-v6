import React, { useState } from 'react'

export default function Home() {
    const [demo, setDemo] = useState(0)
    const handlePlus = () => {
        setDemo(pre => pre + 1)
        console.log(demo)
    }
    return (
        <>

            <h1>Home</h1>
            {demo}
            <button onClick={handlePlus}>Plus</button>
        </>
    )
}
