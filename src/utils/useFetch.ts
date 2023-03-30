import { QuizzesApiRequest } from "@/types/types";
import { useState, useEffect } from "react";
/*
 * Custom hook for dealing with fetching api.
 * Returns an object consisting of data, pending status and error string.
 * Also catches an error when
 */
interface returnType {
  data: QuizzesApiRequest | null;
  isPending: boolean;
  error: string;
}
// add partial?
export default function useFetch(apiURL: string): returnType {
  const [data, setData] = useState<QuizzesApiRequest | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsPending(true);
    fetch(apiURL)
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch the data from that resource.");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        //setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return { data, isPending, error };
}
