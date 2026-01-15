// hooks/useApi.ts
import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

export function useApi<T>(apiCall: () => Promise<AxiosResponse<{ data: T }>>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const res = await apiCall();
        if (mounted) setData(res.data.data); // unwrap Axios + ApiResponse
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, [apiCall]);

  return { data, loading };
}
