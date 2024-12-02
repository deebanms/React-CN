// Complete the following hook
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null); // To store the fetched data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To store any error encountered during fetching

  const getJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getJoke();
  }, [url]); // Fetch data when the url changes
  //It should return data returned from fetch, loading, error and getJoke
  return { data, loading, error, getJoke };
};
// export the useFetch hook as a default export
export default useFetch;
