import React from "react";

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
    <div>
      <div>
        <h2>Electronics Items</h2>
        <ul>
          {electronicsItems.map((product) => (
            <li key={product.productId}>
              {`${product.sellingprice}-${product.productname}-${product.category}`}{" "}
              -
              <button onClick={() => onDeleteProduct(product.productId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Food Items</h2>
        <ul>
          {foodItems.map((product) => (
            <li key={product.productId}>
              {`${product.sellingprice}-${product.productname}-${product.category}`}{" "}
              -
              <button onClick={() => onDeleteProduct(product.productId)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Skincare Items</h2>
        <ul>
          {skincareItems.map((product) => (
            <li key={product.productId}>
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
