import { useState, useEffect } from 'react';
import axios from 'axios';
import { resourceBaseUrl } from '../../constants/links';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController: AbortController = new AbortController(); // to avoid memory leaks

    const getData = async () => {
      try {
        const response = await axios({
          method: 'GET',
          baseURL: resourceBaseUrl,
          url,
        });
        setIsPending(false);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err: any) {
        setIsPending(false);
        setError(err.message);
      }
    };

    getData();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
