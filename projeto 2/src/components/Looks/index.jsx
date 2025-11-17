import Tendencia from "../../assets/Tendencia.png";
import Sombra from "../../assets/Sombra.png";
import Blush from "../../assets/Blush.png";
import Labios from "../../assets/Labios.png";
import "./Looks.scss";

function Looks () {
    return (
        <>
            <h2>Looks e dicas de maquiagem</h2>
            <section className="cartoes">
                <section className="labios_card">
                    <img src={Labios} alt="" />
                    <h2>LÁBIOS</h2>
                </section>
                <section className="olhos_card">
                    <img src={Sombra} alt="" />
                    <h2>OLHOS</h2>
                </section>
                <section className="rosto_card">
                    <img src={Blush} alt="" />
                    <h2>ROSTO</h2>
                </section>
                <section className="tendencias_card">
                    <img src={Tendencia} alt="" />
                    <h2>TENDÊNCIA</h2>
                </section>
            </section>
        </>
    )
}

export default Looks;