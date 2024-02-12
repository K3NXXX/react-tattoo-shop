import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CatalogFrame from "./pages/Catalog/CatalogFrame";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/Account/Account";
import "./scss/global.scss"
import { fetchAuthMe, selectIsAuth } from "./redux/slices/authSlice";
import { AppDispatch } from "./redux/store";
const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useSelector(selectIsAuth)
  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])
  return (
    <div className="App">
        <Header/>
        <main className="main">
          <Routes>
            <Route path="*" element={<PageNotFound/>} />
            <Route path="/react-tattoo-shop" element={<Home/>} />
            <Route path="/react-tattoo-shop/cart" element={<Cart/>} />
            <Route path="/react-tattoo-shop/account" element={<Account/>} />
            <Route path="/react-tattoo-shop/catalog/:id" element={<CatalogFrame/>} />
          </Routes>
        </main>
          <Footer/>
    </div>
  );
}

export default App;
