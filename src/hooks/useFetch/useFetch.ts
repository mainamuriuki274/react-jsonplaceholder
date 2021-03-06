import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { resourceBaseUrl } from '../../constants/links';

interface ReturnedData<T> {
  data: T | undefined;
  isPending: boolean;
  error: AxiosError<any> | undefined;
}

const useFetch = <T>(url: string): ReturnedData<T> => {
  const [data, setData] = useState<T>();
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError<any> | undefined>();

  useEffect(() => {
    const abortController: AbortController = new AbortController(); // to avoid memory leaks

    const getData = async (): Promise<void> => {
      try {
        const response: AxiosResponse = await axios({
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
        setError(err);
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
