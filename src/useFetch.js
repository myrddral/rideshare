import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isPending: false });

  useEffect(() => {
    setState({ data: null, isPending: true });
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setState({ data: result, isPending: false });
      });
    }, [url]);
    
  return state;
};

export default useFetch;
