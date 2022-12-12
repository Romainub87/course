import ToDoItem from "./ToDoItem";
import '../styles/ToDoList.css';



function ToDoList() {

    const todoList = [{ product: 'Banane', nb: 2, isCheck: true }];

    return (
        <div className="div-to-do-list">
            <ul className="to-do-list">
                {todoList.map(({ id, product, nb }) => (
                    <div key={id}>
                        <ToDoItem product={product} nb={nb} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList