import React from "react";
import "./Reference.css";

import AVTR2 from "../../images/avatar2.jpg";
import AVTR3 from "../../images/avatar3.jpg";
import AVTR4 from "../../images/avatar4.jpg";
import AVTR1 from "../../images/avatar1.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR2,
    name: "Eronus",
    review: "ABCDEFG",
  },
  {
    avatar: AVTR3,
    name: "ArMos",
    review: "BVFSSFVG",
  },
  {
    avatar: AVTR4,
    name: "Selina",
    review: "ADFGGGGGGGGGGGGG",
  },
  {
    avatar: AVTR1,
    name: "Atikur Rahman",
    review: "ADSFFFGGBGB",
  },
  {
    avatar: AVTR2,
    name: "Eronus",
    review: "BGGHFDDFG",
  },
];

function Reference() {
  return (
    <section id="references">
      <h5>Review from Everyone</h5>
      <h2>Reference</h2>

      <Swiper
        className="container reference__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="reference">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Reference;
