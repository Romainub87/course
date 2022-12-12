
function ToDoItem({product, nb}){
    return (
        <li className="to-do-item">
            <span className="to-do-name">{product}</span>
            <span> x{nb}</span>
        </li>
    )
}

export default ToDoItem;