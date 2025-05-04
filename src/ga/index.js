// src/ga/index.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-QJHN981TPS'); // Mã đo lường GA4 của bạn
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
};
