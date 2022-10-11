import Layout from "../Components/Layout/index";
import Product from '../Components/Product/index';
import FilterArea from '../Components/Filter/index';
import { useSelector } from 'react-redux';
import React from 'react';
import { Helmet } from "react-helmet";

const HomePage = () => {
  const filteredProductList = useSelector(state => state.filteredProductList);

  const loges = () => {
    console.log("Hello, logger here");
  }

  return (
    <>
      <Layout>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="write home description here " />
        </Helmet>
        <FilterArea />
        <Product filteredProductList={filteredProductList} />
      </Layout>
    </>
  );
}

export default HomePage;