import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/HomeP";
import About from "./pages/AboutP";
import Services from "./pages/ServicesP";
import Portfolio from "./pages/PortfolioP";
import ProjectDetail from "./pages/ProjectP";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
