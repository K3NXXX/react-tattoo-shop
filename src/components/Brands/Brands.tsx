import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import { brandsList } from "../../lists/brandsList";
import { useEffect, useState } from "react";
import style from "./Brands.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';
const Brands: React.FC = () => {
    const [slidesPerView, setSlidesPerView] = useState<number>(5)
    const [showMore, setShowMore] = useState<boolean>(false)
    const [imgTablet, setImgTablet] = useState<number>(6)
    useEffect(() => {
        const resizeWindow = () : void => {
            if(window.innerWidth <= 1350) {
                setSlidesPerView(3)
            }
            else if(window.innerWidth <= 1420) {
                setSlidesPerView(4)
            }else {
                setSlidesPerView(slidesPerView)
            }
        }
        resizeWindow()
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [])
    return (  
        <section className={style.wrapper}>
            <div className={style.title__wrapper}>
                <h3 className={style.title}>Популярні бренди</h3>
                {showMore ? (
                        <p onClick={() => {
                            setImgTablet(6)
                            setShowMore(!showMore)}} className={style.watchAll}>Приховати</p>
                    ): (
                        <p onClick={() => {
                            setImgTablet(10)
                            setShowMore(!showMore)}} className={style.watchAll}>Дивитися всі</p>
                )}
            </div>
            <div className={style.brandsPC}>
                {showMore ? (
                     <div className={style.brands__listAll}>
                     {brandsList.map((image) => (
                             <img key={image.id} src={image.imageURL} alt="brands images"/>
                     ))
                     }
                 </div>
                ) : (
                    <div className={style.brands__list}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={40}
                        slidesPerView={slidesPerView}
                        navigation
                     >
                    {brandsList.map((image) => {
                        return <SwiperSlide key={image.id}>
                            <img src={image.imageURL} alt="brands image"/>
                        </SwiperSlide>
                    })
                    }
                    </Swiper>
                </div>
                )}
            </div>
            <div className={style.brandsTablet}>
                <div className={style.brands__listAll}>
                     {brandsList.slice(0, imgTablet).map((image) => (
                             <img className={style.images} key={image.id} src={image.imageURL} alt="brands image"/>
                     ))
                     }
                </div>
            </div>
        </section>
    );
}
 
export default Brands;