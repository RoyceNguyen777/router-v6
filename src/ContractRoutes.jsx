import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContractLayout from './container/ContractLayout'
import NewContract from './pages/NewContract'
import Contract from './pages/Contract'

export default function ContractRoutes() {
    return (
        <Routes>
            <Route element={<ContractLayout />} >
                <Route index element={<NewContract />} />
                <Route path=':id' element={<Contract />} />
                <Route path='new' element={<NewContract />} />
            </Route>
        </Routes>
    )
}
