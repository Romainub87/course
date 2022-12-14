import "../styles/AjoutProd.css";
import { useState } from "react";

function AjoutProd({ addProduct }) {
  const [nameP, setNameP] = useState("");
  const [count, setCount] = useState(1);
  const [isGood, setIsGood] = useState(true);
  
  function isGoodOrNot(e) {
    if (e.target.value === "") {
      setIsGood(true);
    } else {
      setIsGood(false);
    }
  }
  
  return (
    <div className="div-form-ajout">
      <h1>Ajout produit</h1>
      <div className="form-ajout">
        <label className="label-form">
          Quantité
          <input
            type="number"
            min="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></input>
        </label>
        <label className="label-form">
          Produit
          <input
            type="text"
            required
            placeholder="Entrer un produit"
            value={nameP}
            onChange={(e) => {setNameP(e.target.value); isGoodOrNot(e)}}
            name="prod"
          />
        </label>
        <button
          disabled={isGood}
          onClick={() => {
            setCount(1);
            setNameP("");
            addProduct(nameP, count);
          }}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default AjoutProd;
