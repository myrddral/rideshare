import { useEffect, useState } from "react";
import db from "./db";

const useFirestore = (collection, document) => {
  const [state, setState] = useState({ data: null, error: null });

  useEffect(() => {
    setState({ data: null });
    if (document) {
      db.collection(`${collection}`)
        .doc(`${document}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const result = doc.data();
            setState({ data: result, error: null });
          } else {
            setState({ data: null, error: "Nincs ilyen dokumentum!" });
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    } else {
      db.collection(`${collection}`)
        .get()
        .then((data) => {
          const result = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setState({ data: result, error: null });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [collection, document]);

  return state;
};

export default useFirestore;
