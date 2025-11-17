import "./footer.scss";
import boleto from "../../assets/boleto.png";
import visa from "../../assets/visa.png";
import pix from "../../assets/pix.png";
import mastercard from "../../assets/mastercard.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/Twitter.png";
import tumblr from "../../assets/Tumblr.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

function Footer(){
    return(
        <>
            <section className="footer">
                <section className="coluna">
                    <h3>ATENDIMENTO</h3>
                    <p>Fale Conosco</p>
                    <p>Perguntas Frequentes</p>
                    <p>Meus Pedidos</p>
                    <p>Nossas Lojas</p>
                </section>
                <section className="coluna">
                    <h3>FORMAS DE PAGAMENTO</h3>
                    <section className="bancos">
                        <img src={visa} alt="" />
                        <img src={mastercard} alt="" />
                        <img src={pix} alt="" />
                        <img src={boleto} alt="" />
                    </section>
                </section>
                <section className="coluna">
                    <h3>SIGA-NOS NAS REDES</h3>
                    <section className="bancos">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                        <img src={twitter} alt="" />
                        <img src={tumblr} alt="" />
                    </section>
                </section>
            </section>
        </>
    )
}

export default Footer;