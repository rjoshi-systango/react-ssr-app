import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductPage() {
    const items = useSelector(state => state.items)
    
  return (
    <div>
        <Link to='/'>back to home</Link>
        {items?.map((item, index) => {
            return <h6 key={`item-sx-${index}`}>{item.name}</h6>
        })}
    </div>
  )
}
