import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import style from "./Category.module.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import CategoryCard from './CategoryCard';
import Skeleton from '../Skeleton/Skeleton';
import { useEffect, useState } from 'react';
const CategoryCarousel = () => {
    const goods = useSelector(state => state.categorySlice.goods)
    const skeleton = [...new Array(4)].map((_, index) => (<Skeleton key={index}/>))
    const isLoading = useSelector((state) => state.categorySlice.isLoading)
    const [slidesPerView, setSlidesPerView] = useState(3)
    useEffect (() => {
        const resizeWindow = () => {
            if (window.innerWidth <= 636) {
                setSlidesPerView(1)
            }else if (window.innerWidth <= 984){
                setSlidesPerView(2)
            }else {
                setSlidesPerView(3)
            }
        }
        resizeWindow(); // щоб при обнові сторінки лишалася та сама к-сть
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])
    return (  
        <div className={style.category__swiper}>
            <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
        >
            {isLoading ? skeleton : goods.length ? goods.map((good) => {
                return <SwiperSlide key={good.id}>
                    <CategoryCard  good = {good}/>
                </SwiperSlide>
            }) : (<p className={style.noGoods}>Товари відсутні</p>)}
        </Swiper>
        </div>

    );
}
 
export default CategoryCarousel;