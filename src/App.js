// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routes from './Routes';
import cartAction from './Store/cart-action';

function App() {

  const dispatch = useDispatch();
  const items = useSelector(state => state.items)
  console.log('console from csr', items);

  useEffect(() => {

    dispatch(cartAction.getCartItems());
  }, [cartAction])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

App.loadData = () => {
  return [
    cartAction.getCartItems
  ]
}

export default App;
