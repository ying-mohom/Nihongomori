import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouters from "./routes/AppRouters";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

function Layout({ children }) {
  const location = useLocation();

  // Hide navbar & footer on login page
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/user/register";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouters />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
