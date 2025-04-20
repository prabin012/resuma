import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const RecentWorks = ({ swiperRef, isActive }: any) => {
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="w-screen flex justify-center mt-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        className="w-screen flex justify-center mt-5"
      >
        <div className="w-7xl dark:bg-[#1f1f28] text-white p-10 border border-green-900 rounded-md  ">
          <div className="mb-10 text-left">
            <h2 className="text-green-500 text-sm font-semibold mb-2">
              Projects
            </h2>
            <h1 className="text-4xl font-bold">My Recent Works</h1>
          </div>
          <div className="border border-gray-700 rounded-lg p-5 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5">
              <img
                src="/images/ICON_WHITE.png"
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-6 flex flex-col justify-between">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-green-500 mb-2">
                  Booking system.
                </h3>
                <p className="text-gray-400 mb-6">
                  worked on colobrative team to developed an online booking
                  platform. I worked on frontend development.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-400 text-sm">Client</h4>
                    <p className="text-white">Ghumnepal innovation Pvt.ltd</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Completion Time</h4>
                    <p className="text-white">1 year</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm">Technologies</h4>
                    <p className="text-white">
                      Node.js, React, Dynmodb, GraphQl, Apollo
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 flex items-center hover:text-green-500"
                  >
                    <span>Live Demo</span>
                    <span className="ml-2">→</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 flex items-center hover:text-green-500"
                  >
                    <span>View on Github</span>
                    <span className="ml-2">→</span>
                  </a>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WorkedWith = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        cssMode={false}
        navigation={false}
        pagination={true}
        mousewheel={false}
        keyboard={false}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <RecentWorks swiperRef={swiperRef} isActive={activeIndex === 0} />
        </SwiperSlide>
        <SwiperSlide>
          <RecentWorks swiperRef={swiperRef} isActive={activeIndex === 1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default WorkedWith;
