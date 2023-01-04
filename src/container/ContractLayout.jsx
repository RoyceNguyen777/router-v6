import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ContractLayout() {
    return (
        <>
            <h1>Contract</h1>
            <ul>
                <li>
                    <Link to={`/contract/1`}>Contract 1</Link>
                </li>
                <li>
                    <Link to="/contract/2">Contract 2</Link>
                </li>
                <li>
                    <Link to="/contract/new">Contract New</Link>
                </li>
            </ul>
            <Outlet context={{ data: [1, 2, 3, 4] }} />
        </>
    )
}
