import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./scss/global.scss"
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/react-tattoo-shop" element=<Home/> />
        </Routes>
    </div>
  );
}

export default App;
