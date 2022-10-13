import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function ProductPage() {
    const items = useSelector(state => state.items)
    const ref = useRef();    
    // const params = useParams();
    // const query = useLocation();
    const history = useHistory();

    // console.log(query);
    // console.log(params);
    // console.log(history);
    const clickHandler = (val) => {
      console.log('on click');
      history.push(`/product/${val}`)
      
    }

  return (
    <div>
        <Helmet>
          <title>{items ? items[0].name : 'mens shirt'}</title>
          <meta name="description" content={items ? items[0].tag : 'shirt are available here'} />
        </Helmet>
        <Link to='/'>back to home</Link>
        {items?.map((item, index) => {
            return <h6 key={`item-sx-${index}`} onClick={() => clickHandler(item.name)}  >{item.name}</h6>
            // return  <h6 key={`item-sx-${index}`} > <Link to={`/product/${item.name}`}>{item.name}</Link> </h6>

        })}
    </div>
  )
}
