import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import { feedbacksList } from "../../lists/feedbacksList";
import { useEffect, useState } from "react";
import style from "./Feedback.module.scss"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const Feedback: React.FC = () => {
    const [slidesPerView, setSlidesPerView] = useState(2)
    useEffect(() => {
        const resizeWindow = () : void => {
            if (window.innerWidth <= 1376) {
                setSlidesPerView(1)
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
        <section >
            <div className={style.wrapper}>
                <h5 className={style.title}>Відгуки</h5>
            </div>
            <div className={style.feedback__list}>
                <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                loop={true}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                >
                {feedbacksList.map(feedback => (
                    <SwiperSlide key={feedback.id}>
                        <div className={style.feedback__wrapper}>
                            <img src={feedback.avatar} alt="" />
                            <p className={style.text}>{feedback.comment}</p>
                            <div className={style.instagram}>
                                <img src={feedback.instagramIcon} alt="instagramIcon"/>
                                <p>{feedback.instagramNickName}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
      );
}
 
export default Feedback