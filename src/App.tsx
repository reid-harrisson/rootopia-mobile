import { BrowserRouter } from "react-router-dom";
import { RouteComponent } from "./routes";
import { Layout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouteComponent />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
