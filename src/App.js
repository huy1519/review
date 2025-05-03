import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";  // Import useLocation từ react-router-dom
import { AuthProvider } from "./contexts/auth-context";
import Contact from "./pages/Contact";
import AdvertiserDisclosure from "./pages/AdvertiserDisclosure";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import ReactGA from 'react-ga4';

function App() {
  const location = useLocation(); // Lấy location từ react-router-dom để theo dõi URL thay đổi

  useEffect(() => {
    // Khởi tạo Google Analytics 4 khi ứng dụng bắt đầu
    ReactGA.initialize('G-TZTWHNFEFM');  // Thay mã này bằng mã GA4 của bạn

    // Ghi nhận lượt xem trang khi URL thay đổi
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);  // Khi location thay đổi (tức là người dùng chuyển trang), gọi logPageView

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/terms-of-service" element={<TermsOfUse />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/personal-information-request" element={<AdvertiserDisclosure />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;