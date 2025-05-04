// src/hooks/usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logPageView } from '../ga';

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);
}
