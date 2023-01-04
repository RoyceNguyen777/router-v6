import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function NewContract() {
    const data = useOutletContext()
    console.log(data);
    return (
        <h1>New Contract</h1>
    )
}
