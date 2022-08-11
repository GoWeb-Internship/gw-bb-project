import { useEffect, useState } from 'react';
import axios from 'axios';

const STORAGE_KEY = 'ucl-reg-yHjb';

const useClientLocation = () => {
  const [location, setLocation] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) ?? '',
  );

  useEffect(() => {
    if (location) return;
    const getLocation = async () => {
      const { data } = await axios.get('https://ipapi.co/json/');
      const code = data.country_code?.toLowerCase();
      setLocation(code);
      sessionStorage.setItem(STORAGE_KEY, code);
    };
    getLocation();
  }, [location]);

  return location;
};

export default useClientLocation;
