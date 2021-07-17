import { useEffect, useState } from "react";
import db from "./db";

const useFirestore = (collection) => {
  const [state, setState] = useState({ data: null, isPending: false });

  useEffect(() => {
    setState({ data: null, isPending: true });
    db.collection(`${collection}`)
      .get()
      .then((data) => {
        const result = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setState({ data: result, isPending: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [collection]);

  return state;
};

export default useFirestore;
