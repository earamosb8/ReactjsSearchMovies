import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";
const Movies = () => {
  const { isLoading, data } = useContext(DataContext);
  


  // 1. Si está cargando, mostramos el Spinner
  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  return (
    <div className="movies-content">
      {!isLoading && data && data.length > 0
        ? data?.map((item, index) => (
            <ItemMovie
              key={index}
              id={item.imdbID}
              type={item.Type}
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
            />
          ))
        :''}
    </div>
  );
};

export { Movies };
