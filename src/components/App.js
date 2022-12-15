import AjoutProd from "./AjoutProd";
import "../styles/App.css";
import ProductList from "./ProductList";
import { useState } from "react";

let nextId = 2;

const products = [{ id: 1, product: "Exemple", nb: 1, isCheck: false }];

function App() {
  const [productList, setProductList] = useState(products);

  function AddProduct(prod, nb) {
    setProductList([
      ...productList,
      {
        id: nextId++,
        product: prod,
        nb: nb,
        isCheck: false,
      },
    ]);
  }

  function DeleteProduct(bool, id) {
    if (!bool) {
      setProductList(productList.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="app">
      <AjoutProd addProduct={AddProduct}></AjoutProd>
      <ProductList
        productList={productList}
        addProduct={AddProduct}
        removeProduct={DeleteProduct}
      ></ProductList>
    </div>
  );
}

export default App;
