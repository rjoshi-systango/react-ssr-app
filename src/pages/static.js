import React from 'react'
import { Link } from 'react-router-dom'

export default function StaticPage() {
    return (
        <div>
            <Link to='/'> back to home</Link>
            <h4>Static content</h4>
        </div>
    )
}
