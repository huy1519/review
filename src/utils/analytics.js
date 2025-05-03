import ReactGA from 'react-ga';

// Khởi tạo Google Analytics với Tracking ID của bạn
export const initGA = () => {
  ReactGA.initialize('UA-XXXXXXXXX-X'); // Thay thế bằng mã Tracking ID của bạn
};

// Gửi page view đến Google Analytics
export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
