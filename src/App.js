import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";  // Import useLocation từ react-router-dom
import { AuthProvider } from "./contexts/auth-context";
import Contact from "./pages/Contact";
import AdvertiserDisclosure from "./pages/AdvertiserDisclosure";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import { initGA, logPageView } from './ga';
import usePageTracking from './hooks/usePageTracking';

function App() {
  usePageTracking();
  useEffect(() => {
    initGA();       // Khởi tạo GA
    logPageView();  // Gửi lần truy cập đầu tiên
  }, []);

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