import React from "react";
import "./ProductDetails.css"; 

const ProductDetails = (props) => {
  const { products, onDeleteProduct } = props;
  const electronicsItems = products.filter(
    (product) => product.category === "Electronics"
  );
  const foodItems = products.filter((product) => product.category === "Food");
  const skincareItems = products.filter(
    (product) => product.category === "Skincare"
  );

  return (
    <div className="product-details-container">
      <div className="product-category">
        <h2>Electronics Items</h2>
        <ul className="product-list">
          {electronicsItems.map((product) => (
            <li key={product.productId} className="product-item">
              {`${product.sellingprice}-${product.productname}-${product.category}`}{" "}
              -
              <button onClick={() => onDeleteProduct(product.productId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-category">
        <h2>Food Items</h2>
        <ul className="product-list">
          {foodItems.map((product) => (
            <li key={product.productId} className="product-item">
              {`${product.sellingprice}-${product.productname}-${product.category}`}{" "}
              -
              <button onClick={() => onDeleteProduct(product.productId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-category">
        <h2>Skincare Items</h2>
        <ul className="product-list">
          {skincareItems.map((product) => (
            <li key={product.productId} className="product-item">
              {`${product.sellingprice}-${product.productname}-${product.category}`}{" "}
              -
              <button onClick={() => onDeleteProduct(product.productId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
