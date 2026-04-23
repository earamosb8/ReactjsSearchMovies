import {useParams} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import DefaultImage from "/NoImage.png";
const SingleMovie = () => {
  const {id} = useParams();
  const {isLoading, error, data} = useFetch(`&i=${id}`);



  const {Poster,Title,Plot,Year, Country, Director,Released,Runtime} = data || {};

  let image = Poster === "N/A" ? DefaultImage : Poster;
  
     const handleError = (e) => {
       e.target.src = DefaultImage;
     };
  
  return !isLoading ? (
    <div style={{display: 'flex',gap: '25px',margin: '7% 0 3%',justifyContent: 'center'}} >
      <img src={image} alt={Title} onError={handleError} style={{borderRadius: '15px', objectFit: 'cover',width: '300px' }} />
      <div style={{width: '500px',textAlign: 'left',backgroundColor: '#ffffff9e',padding: '13px 25px',borderRadius: '15px'}}>
        <h2 style={{fontSize: '40px',lineHeight: '42px',marginTop: '0'}}>{Title}</h2>
        <p>{Plot}</p>
        <p>
          <strong>Country</strong>
          {Country}
        </p>
        <p>
          <strong>Director</strong> {Director}
        </p>
        <p>
          <strong>Released:</strong> {Released}
        </p>
        <p>
          <strong>Runtime:</strong>
          {Runtime}
        </p>
        <p>
          <strong>Year:</strong>
          {Year}
        </p>
      </div>
    </div>
  ) : (
    ""
  );

}
export {SingleMovie};