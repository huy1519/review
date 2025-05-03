import ReactGA from 'react-ga4';

export const initAnalytics = () => {
    ReactGA.initialize('G-XXXXXXXXXX'); // Thay bằng Measurement ID của bạn
};

export const logPageView = (page) => {
    ReactGA.send({ hitType: 'pageview', page });
};