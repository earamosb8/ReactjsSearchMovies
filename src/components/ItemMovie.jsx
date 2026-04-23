import DefaultImage from "/NoImage.png";
import { Link } from "react-router-dom";

const ItemMovie = ({id,title, type, year, poster }) => {
  let image = poster === "N/A" ? DefaultImage : poster;

   const handleError = (e) => {
     e.target.src = DefaultImage;
   };

  return (
    <Link to={`/movies/${id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <article className="item-movie">
          <img
            className="item-img"
            src={image}
            alt={title}
            onError={handleError}
          />
          <div className="info">
            <h4>{title}</h4>
            <p className="row-info">
              <span>{type}</span>
              <span>{year}</span>
            </p>
          </div>  
      </article>
      </Link>
  );
};

export default ItemMovie;
