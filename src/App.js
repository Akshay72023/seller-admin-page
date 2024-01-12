import React, { useState,useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

function App() {
  const [productList, setProductList] = useState([]);

  const productDetailsHandler = (pId, pSP, pName, pCategory) => {
    const productDetails = {
      sellingprice: pSP,
      productname: pName,
      category: pCategory,
    };

    setProductList((prevList) => [...prevList, { productId: pId, ...productDetails }]);
    localStorage.setItem(pId, JSON.stringify(productDetails));
  };

  const deleteProductHandler = (productId) => {
    setProductList((prevList) => prevList.filter((product) => product.productId !== productId));
    localStorage.removeItem(productId);
  };

  useEffect(() => {
    const storedProductList = Object.keys(localStorage).map((key) => {
      return {
        productId: key,
        ...JSON.parse(localStorage.getItem(key)),
      };
    });
    setProductList(storedProductList);
  }, []);

  return (
    <div>
      <ProductForm onAddProduct={productDetailsHandler} />
      <h1>Products</h1>
      <ProductDetails products={productList} onDeleteProduct={deleteProductHandler} />
    </div>
  );
}

export default App;
