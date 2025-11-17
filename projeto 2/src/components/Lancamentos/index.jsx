import "./lancamentos.scss";
import azul from "../../assets/azul.png";
import vermelho from "../../assets/vermelho.png";
import base from "../../assets/base.png";
import marrom from "../../assets/marrom.png";
import Novidade from "../../assets/Banner B.png";

import { useState } from "react";

function Lancamentos() {

const[cor, SetCor] = useState(vermelho);

    return (
        <>
            <h2>Lançamentos</h2>
            <section className="faixa">
                <section className="primeiro">
                    <img src={cor} alt="" />
                    <h3>Batom Matte Premium</h3>
                </section>
                <section className="segundo">
                    <section className="Botoes">
                        <button onClick={() => SetCor(vermelho)}>Vermelho</button>
                        <button onClick={() => SetCor(azul)}>Azul</button>
                        <button onClick={() => SetCor(base)}>Nude</button>
                        <button onClick={() => SetCor(marrom)}>Escuro</button>
                    </section>
                
                    <h3>Descrição do Produto</h3>
                    <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
                </section>
            </section>
            <h2>Novidades</h2>
            <img className="banner" src={Novidade} alt="" />
        </>
    );
}

export default Lancamentos;