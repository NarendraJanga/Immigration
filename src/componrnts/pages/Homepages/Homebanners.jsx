import React, { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Homebanners.module.css";
import NameFlag from "./NameFlag";
import Skeleton from 'react-loading-skeleton'; // Importing Skeleton for loading effect
import 'react-loading-skeleton/dist/skeleton.css'; // Import CSS for Skeleton styling

const Homebanners = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={styles.homeBannersContainer}>
      {loading ? (
        <div>
          <Skeleton height={300} />
        </div>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {["swiperImages", "swiperImage2", "swiperImage3"].map(
            (imageClass, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles[imageClass]}>
                  <div className="flagSpace">
                    <NameFlag />
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      )}
    </div>
  );
};

export default Homebanners;