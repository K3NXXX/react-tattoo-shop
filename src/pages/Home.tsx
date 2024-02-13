import Catalog from "../components/Catalog/Catalog";
import Intro from "../components/Home/Intro/Intro";
import Brands from "../components/Brands/Brands";
import About from "../components/About/About";
import Feedback from "../components/Feedback/Feedback";
import Subscribe from "../components/Subscribe/Subscribe";
import Category from "../components/Category/Category";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory, setGoods, setIsLoading, setNewGood } from "../redux/slices/categorySlice";
import { RootState } from "../redux/store";
import axios from "axios";
import "../scss/global.module.scss"

const Home: React.FC = () => {
    // Отримую вибрану категорію з Category---------------
    const activeCategory = useSelector((state: RootState) => state.categorySlice.activeCategory)
    const dispatch = useDispatch()
    useEffect(() => {
        const recievingData = async () => {
            let searchParams = ""
            if(activeCategory === 0) {
                 searchParams = "new" 
            }else if (activeCategory === 1) {
                 searchParams = "hits"
            }else if (activeCategory === 2) {
                searchParams = "popular"
           }else {
            searchParams = ""
           }
           try {
            const res = await axios.get(`https://64cc9b3a2eafdcdc851a0362.mockapi.io/goods?search=${searchParams}`)
            dispatch(setGoods(res.data))
            dispatch(setIsLoading(false))
            if (searchParams === "new") {
                dispatch(setNewGood(true));
            } else {
                dispatch(setNewGood(false));
            }
            }catch (error) {
                alert("Помилка при отриманні товарів з сервера")
                console.log("Error", error)
                dispatch(setIsLoading(true))
            }
        }
        recievingData()
    }, [activeCategory, dispatch])
   
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (  
        <main>
            <Intro/>
            <Category activeCategory = {activeCategory} onClickActiveCategory = {(index) => {dispatch(setActiveCategory(index))}}/>
            <Catalog/>
            <Brands/>
            <About/>
            <Feedback/>
            <Subscribe/>
        </main>
    );
}
 
export default Home;