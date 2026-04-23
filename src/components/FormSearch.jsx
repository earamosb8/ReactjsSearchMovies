import { useState, useContext ,useEffect} from 'react';
import { DataContext } from '../context/DataContext';


const FormSearch = () => {
    const [title, setTitle] = useState('');
    const { setQuery, setData,error } = useContext(DataContext);
    //const [data] = useFetch("&s=avengers");
    

    useEffect(() => {
      if (!title.trim()) {
        setData(null);
      }
    }, [title, setData]);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()) return;
        setQuery(title);
    }   
    return (
      <div className="form-search">
        <h2>Movies Finder</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        {error && <p className="error">The Movie doesn't exist</p>}
      </div>
    );
}

export {FormSearch}