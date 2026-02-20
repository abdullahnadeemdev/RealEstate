import Layout from "./components/shared/Layout";
import Home from "./pages/HomeP";

function App() {
  return (
    <div className="font-lato">
      <Layout>
        <div className="mx-auto">
          <Home />
        </div>
      </Layout>
    </div>
  );
}

export default App;
