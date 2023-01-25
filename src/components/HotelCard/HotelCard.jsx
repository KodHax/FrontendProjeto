import "./HotelCard.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.fotos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.nome}</h1>
        <span className="siDistance">{item.distancia} do centro</span>
        <span></span>
        <span>
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span></span>
        <span></span>
        <span className="siCancelOp">Cancelamento grátis! </span>
        <span className="siCancelOpSubtitle">
          Pode cancelar mais tarde, por isso aproveite!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">{item.preco}€</span>
          <Link to={`/hoteis/${item._id}`}>
            <button className="siCheckButton">Ver disponibilidade</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
