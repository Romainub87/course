import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

function ProductList({ productList, removeProduct }) {
  return (
    <ul>
      {productList?.map((prod) => (
        <div key={prod.id} className="item">
          <ProductItem
            product={prod.product}
            nb={prod.nb}
            id={prod.id}
            removeProd={removeProduct}
          />
        </div>
      ))}
    </ul>
  );
}

export default ProductList;
