import React, { useEffect, useState } from "react";

const Cart = () => {
  const product = localStorage.getItem("product");
  const [cartProduct,setProduct]=useState("");
  useEffect(()=>{
      setProduct(product);

  },[])
  return (
    <div>
      <p>{cartProduct && cartProduct.title}</p>
      <img src={cartProduct?.img}/>
    </div>
  );
};

export default Cart;
