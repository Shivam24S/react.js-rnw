import React, { useEffect, useState } from "react";
import {
  addProduct,
  updateProductData,
} from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: 10,
    category: "",
  });

  const updateState = useSelector((state) => state.product.updateState);

  useEffect(() => {
    if (updateState) {
      setProduct(updateState);
    }
  }, [updateState]);

  console.log("update state", updateState);

  const dispatch = useDispatch();

  const handleChange = (identifier, e) => {
    setProduct((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateState) {
      dispatch(updateProductData(product));
      setProduct({ name: "", price: "", qty: "", category: "" });
    } else {
      dispatch(
        addProduct({
          id: new Date().getTime(),
          ...product,
        })
      );
      setProduct({ name: "", price: "", qty: "", category: "" });

      alert("product added");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={product.name}
          onChange={(e) => handleChange("name", e)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="price"
          value={product.price}
          onChange={(e) => handleChange("price", e)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Quantity"
          value={product.qty}
          onChange={(e) => handleChange("qty", e)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="category"
          value={product.category}
          onChange={(e) => handleChange("category", e)}
          required
        />
        <br />

        <button type="submit">{updateState ? "update" : "add product"}</button>
      </form>
    </>
  );
};

export default ProductForm;
