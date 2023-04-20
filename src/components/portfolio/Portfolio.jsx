import "./Portfolio.css";
import Projects from "../data/Project";
import { BiLink } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import { useRef } from "react";

import { motion } from "framer-motion";
import { portfolioAnimation } from "../../animation/animation";
import { useScroll } from "../../animation/useScroll";

const Portfolio = () => {
  const swiperRef = useRef(null);
  const [element, controls] = useScroll();

  return (
    <section id="portfolio" className="portfolio ">
      <h5>See My Work</h5>
      <h2>Portfolio</h2>
      <div ref={element}>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          modules={[Keyboard, Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={true}
          navigation={true}
          className="mySwiper"
        >
          {Projects.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="portfolio__container"
                  variants={portfolioAnimation}
                  animate={controls}
                  transition={{ delay: 0.06, type: "tween", duration: 0.6 }}
                >
                  <div className="project__img">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.img} alt={project.name} />
                    </a>
                  </div>
                  <div className="project__details" key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project__link">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <BiLink />
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FiGithub />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// // import required modules
// import { Pagination } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
