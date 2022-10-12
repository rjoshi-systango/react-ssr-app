import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <h4>home page</h4>
        <div>
            <Link to='/product' >Product Page</Link>
        </div>
        <div>
            <Link to='/static-content' >Static page</Link>
        </div>
    </div>
  )
}
