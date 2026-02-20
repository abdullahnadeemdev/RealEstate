import Layout from "./components/shared/Layout";
import Home from "./pages/HomeP";
import About from "./pages/AboutP";

function App() {
  return (
    <div className="font-lato">
      <Layout>
        {/* <Home /> */}
        <About />
      </Layout>
    </div>
  );
}

export default App;
