import ToDoItem from "./ToDoItem";
import "../styles/ToDoList.css";

function ToDoList({ productList, removeProduct }) {
  return (
    <ul>
      {productList?.map((prod) => (
        <div key={prod.id}>
          <ToDoItem
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

export default ToDoList;
