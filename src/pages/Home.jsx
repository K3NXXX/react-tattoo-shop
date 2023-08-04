import { useEffect, useState } from "react";
import Category from "../components/Category/Category";
import Intro from "../components/Home/Intro/Intro";
import axios from "axios";

const Home = () => {
    const [goods, setGoods] = useState([])
    useEffect(() => {
    axios.get(`https://64cc9b3a2eafdcdc851a0362.mockapi.io/goods`)
    .then(res => setGoods(res.data))

    }, [])
    return (  
        <main>
            <Intro/>
            <Category goods = {goods}/>
        </main>
    );
}
 
export default Home;