import React from 'react'
import { useSelector } from 'react-redux'

export default function NewApp() {
    const data = useSelector(state => state);
    console.log(data);
  return (
    <div>NewApp</div>
  )
}
