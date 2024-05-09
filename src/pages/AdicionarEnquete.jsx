import React, { useState } from "react";
import "animate.css/animate.css"


const AdicionarEnquete = () => {

    const [enquete, setEnquete] = useState(""); 
    const [opcoes, setOpcoes] = useState([]); 

    const submitForm = (e) => {
        e.preventDefault();
    };
    return(
        <section className="animate__animated animate__backInUp">
            <form onSubmit={submitForm}>
                <label>Informe um título para a enquete </label>
                <br />
                <input type="text" onChange={(e) => setEnquete(e.target.value)}></input>
            </form>

        </section>
    );
};





export default AdicionarEnquete;