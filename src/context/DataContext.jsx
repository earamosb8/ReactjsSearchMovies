import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";


export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  
  const { isLoading, error, data, setData } = useFetch(
    `&s=${query}`,
  );

  return (
    <DataContext.Provider
      value={{ setQuery, query, isLoading, error, data, setData }}
    >
      {children}
    </DataContext.Provider>
  );
};


export const DataContext = createContext();
