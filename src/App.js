import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./scss/global.scss"
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CatalogFrame from "./pages/Catalog/CatalogFrame";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <div className="App">
        <Header/>
        <main className="main">
          <Routes>
            <Route path="/react-tattoo-shop" element={<Home/>} />
            <Route path="/react-tattoo-shop/cart" element={<Cart/>} />
            <Route path="/react-tattoo-shop/catalog/:id" element={<CatalogFrame/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </main>
          <Footer className="Footer"/>
    </div>
  );
}

export default App;
