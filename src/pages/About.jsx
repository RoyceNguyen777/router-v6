import React, { useContext } from 'react'
import { AboutContext } from '../context/AboutContext'
import './about.css'

export default function About() {

  const { counter, setCounter } = useContext(AboutContext)

  return (
    <h1 className='about'>
      <div className='about_a'>
        abc
      </div>
      {counter}
      <button onClick={() => {
        setCounter(pre => pre + 1)
      }}>+</button>
    </h1>
  )
}
