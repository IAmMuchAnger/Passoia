import "./Banner.scss"
import Revitalift from "../../assets/Revitalift.png";

function Banner () {
    return (
        <>
            <section>
                <img className="banner" src={Revitalift} alt="Novo Revitalift 15% de Desconto" />
            </section>
        </>
    )
}

export default Banner; 