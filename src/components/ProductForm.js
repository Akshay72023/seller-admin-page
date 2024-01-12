import React, { useState } from "react";

const ProductForm = (props) => {
  const [enterProductId, setProductId] = useState("");
  const [enterSellingPrice, setSellingPrice] = useState("");
  const [enterProductName, setProductName] = useState("");
  const [enterCategory,setCategory]=useState("Electronics");

  const productIdChangeHandler = (event) => {
    setProductId(event.target.value);
  };

  const sellingPriceChangeHandler=(event)=>{
    setSellingPrice(event.target.value);
  };

  const productNameChangeHandler=(event)=>{
    setProductName(event.target.value);
    
  };

  const categoryChangeHandler=(event)=>{
    setCategory(event.target.value);
  };

  const addProductHandler=(event)=>{
    event.preventDefault();
   props.onAddProduct(enterProductId,enterSellingPrice,enterProductName,enterCategory);
  }


  return (
    <div>
      <form onSubmit={addProductHandler}>
        <label htmlFor="ProductId">ProductId</label>
        <input
          type="number"
          id="ProductId"
          value={enterProductId}
          onChange={productIdChangeHandler}
        />
        <label htmlFor="SellingPrice">SellingPrice</label>
        <input
          type="number"
          id="SellingPrice"
          value={enterSellingPrice}
          onChange={sellingPriceChangeHandler}
        />
        <label htmlFor="ProductName">ProductName</label>
        <input
          type="text"
          id="ProductName"
          value={enterProductName}
          onChange={productNameChangeHandler}
        />
        <label htmlFor="Category">Category</label>
        <select name="Category" id="Category" onChange={categoryChangeHandler}>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
