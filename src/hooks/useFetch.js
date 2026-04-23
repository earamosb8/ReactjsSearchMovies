import { useEffect, useState } from "react";

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=6dfa331b`;

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(false); // 👈 false
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchMovie = (url) => {
    if (!params || params.trim() === "&s=") return;
    setIsLoading(true);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => {
        if (respuestaJson.Response === "True") {
          setData(respuestaJson.Search || respuestaJson);
          setError(false);
        } else {
          setError(true);
          setData(null);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData(null);
      });
  };
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}${params}`);
  }, [params]);

  return { isLoading, error, data, setData};
};
