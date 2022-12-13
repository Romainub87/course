import '../styles/ToDoItem.css'

function ToDoItem({ product, nb, id, removeProd }) {
  return (
    <li className="product-item">
      <span className="product-name">{product}</span>
      <span className='product-nb'> x{nb}</span>
      <button className='product-delete' onClick={() => removeProd(id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
