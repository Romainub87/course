import AjoutTask from "./AjoutTask";
import "../styles/App.css";
import ToDoList from "./ToDoList";
import { useState } from "react";

let nextId = 2;

const products = [{ id: 1, product: "Banane", nb: 2, isCheck: true }];

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

  function DeleteProduct(id) {
    setProductList(productList.filter((p) => p.id !== id));
  }

  return (
    <div className="app">
      <ToDoList
        productList={productList}
        addProduct={AddProduct}
        removeProduct={DeleteProduct}
      ></ToDoList>
      <AjoutTask addProduct={AddProduct}></AjoutTask>
    </div>
  );
}

export default App;
