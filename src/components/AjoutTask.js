import '../styles/AjoutTask.css'
import { useState } from "react";

function AjoutTask() {

    const [produit, setProduit] = useState('');
    const [nb, setNb] = useState(0);

    function ajoutProduit() {
        setProduit(produit);
        console.log();
    }

    function PlusUn(nb) {
        setNb(nb);
        console.log(nb);
    }

    return (
        <div className="div-form-ajout">
            <h1>Ajout d'une task</h1>
            <label>Produit : <input type="text" name="prod"/></label>
            <button onClick={() => PlusUn(nb + 1)}>+1</button>
        </div>

    )
}

export default AjoutTask