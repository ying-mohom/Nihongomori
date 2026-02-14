import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRouters";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouters />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
