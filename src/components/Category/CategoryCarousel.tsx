import CategoryCard from './CategoryCard';
import Skeleton from '../Skeleton/Skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store';
import { CategoryItem } from '../../redux/slices/categorySlice';
import style from "./Category.module.scss"
import 'swiper/css/pagination';
import 'swiper/css';

const CategoryCarousel: React.FC = () => {
    const goods = useSelector((state:RootState) => state.categorySlice.goods)
    const isLoading = useSelector((state:RootState) => state.categorySlice.isLoading)
    const skeleton = [...new Array(4)].map((_, index) => (<Skeleton key={index}/>))
    const [slidesPerView, setSlidesPerView] = useState<number>(3)

    useEffect (() => {
        const resizeWindow = () : void => {
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
            {isLoading ? skeleton : goods.length ? goods.map((good: CategoryItem) => {
                return <SwiperSlide key={good.id}>
                    <CategoryCard  good = {good}/>
                </SwiperSlide>
            }) : (<p className={style.noGoods}>Товари відсутні</p>)}
            </Swiper>
        </div>
    );
}
 
export default CategoryCarousel;