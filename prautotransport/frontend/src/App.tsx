import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopAnnouncement from "./components/TopAnnouncement";
import ScrollToTopAndHash from "./components/ScrollToTopAndHash";
import LandingPage from "./pages/landingPage/LandingPage";
import Advisers from "./pages/advisers/Advisers";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blogPost/BlogPost";
import Documents from "./pages/documents/Documents";
import TermsAndConditions from "./pages/t&c/termsAndConditions";

function App() {
  return (
    <Router>
      <ScrollToTopAndHash />
      <TopAnnouncement />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/asesoras" element={<Advisers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/documentos" element={<Documents />} />
        <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

