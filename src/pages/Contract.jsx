import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
const list = [
  {
    id: 1,
    name: "Tai"
  },
  {
    id: 2,
    name: "Chuong"
  },
  {
    id: 3,
    name: "Khuong"
  },
  {
    id: 4,
    name: "Tri"
  }
]

export default function Contract() {
  const { id } = useParams()
  const [dataList, setDataList] = useState(list)

  const myObj = {
    id: 1,
    name: "Chuong"
  }
  console.log(id);
  const url = new URLSearchParams(myObj).toString();
es(convert)
  console.log(newurl)


  useEffect(() => {
    const filterList = list.filter(item => item.id == id)
    setDataList(filterList);
  }, [id])

  return (
    <>
      {/* <h1>Contract {id}</h1> */}
      <ul>
        <li>
          <Link to={`/contract/1`}>Tai</Link>
        </li>
        <li>
          <Link to="/contract/2">Chuong</Link>
        </li>
        <li>
          <Link to="/contract/3">Khuong</Link>
        </li>
        <li>
          <Link to={`/contract/${url}`}>Tri</Link>
        </li>
      </ul>
      {dataList.map(item => <div>{item.name}</div>)}
    </>
  )
}
