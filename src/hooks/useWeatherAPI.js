import { useEffect, useState } from 'react';
import config from 'config';

const APIBaseURL = 'http://api.openweathermap.org/data/2.5/weather';

const useWeatherAPI = usZipCode => {
  const [loading, setLoading] = useState(false);
  const [ error, setError ] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!usZipCode) return;

    const fetchData = async () => {
      setLoading(true);
      const url = `${APIBaseURL}?zip=${usZipCode},us&appid=${config.openWeatherMapToken}&units=imperial`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch(e) {
        console.error(e);
        setError(e)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [usZipCode]);

  return { loading, error, data };
};

export default useWeatherAPI;
