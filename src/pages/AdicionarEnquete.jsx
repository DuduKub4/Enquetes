import React, { useState } from "react";
import "animate.css/animate.css"


const AdicionarEnquete = () => {

    const [enquete, setEnquete] = useState(""); 
    const [opcoes, setOpcoes] = useState([]);
    
    const addOpcao = () => {
        setOpcoes([...opcoes,""]) //spread operator - pegar todos os elementos do array opções
    } 
    console.log(opcoes);

    const submitForm = (e) => {
        e.preventDefault();
    };
    return(
        <section className="animate__animated animate__backInUp">
            <form onSubmit={submitForm}>
                <label>Informe um título para a enquete </label>
                <br />
                <input type="text"
                 onChange={(e) => setEnquete(e.target.value)}
                 ></input>
                 {opcoes.map((option, index) =>(
                 <div key={index}>
                   <label>Opção</label>
                   <input type="text"></input>
                 </div>
                 ))}
                 <br />
                 <button type="submit" onClick={addOpcao}>
                    Adicionar opção
                 </button>
            </form>

        </section>
    );
};





export default AdicionarEnquete;