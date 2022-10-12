import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function ProductPage() {
    const items = useSelector(state => state.items)
    
  return (
    <div>
        <Helmet>
          <title>{items ? items[0].name : 'mens shirt'}</title>
          <meta name="description" content={items ? items[0].tag : 'shirt are available here'} />
        </Helmet>
        <Link to='/'>back to home</Link>
        {items?.map((item, index) => {
            return <h6 key={`item-sx-${index}`}>{item.name}</h6>
        })}
    </div>
  )
}
