import "../styles/ProductItem.css";
import { useState } from "react";

function ProductItem({ product, nb, id,  removeProd }) {

  const [isCheck, setCheck] = useState(false);

  function check(bool) {
    setCheck(!bool);
  }

  return (
    <li className={`switch ${!isCheck ? "product-item-no-check": "product-item-check"}`}>
      <input type="checkbox" value={isCheck} onChange={() => check(isCheck) }></input>
      <span className="product-name">{product}</span>
      <span className="product-nb"> x{nb}</span>
      <button className="product-delete" onClick={() => removeProd(isCheck, id)}>
        Delete
      </button>
    </li>
  );
}

export default ProductItem;
