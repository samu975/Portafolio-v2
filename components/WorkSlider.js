// data
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Wiwo landing-page",
          path: "/wiwo.png",
          page: "https://landing-wiwo.netlify.app/",
        },
        {
          title: "Taski",
          path: "/taski.png",
          page: "https://taski-frontend-production.up.railway.app/",
        },
        {
          title: "Kiautos",
          path: "/kiautos.png",
          page: "https://kiautosdelsur.netlify.app",
        },
        {
          title: "Graffitour comuna 13",
          path: "/graffitour13.png",
          page: "https://graffitour13.netlify.app",
        },
      ],
    },
    {
      images: [
        {
          title: "Mintacoin",
          path: "/Mintacoin.png",
          page: "https://www.mintacoin.co/",
        },
        {
          title: "OkDose",
          path: "/OkDose-1.png",
          page: "https://www.okdose.co/",
        },
        {
          title: "Podnation",
          path: "/podnation-1.png",
          page: "https://www.podnation.co/",
        },
        {
          title: "ChainCerts",
          path: "/chaincerts.png",
          page: "https://chaincerts.co/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const router = useRouter();
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                    onClick={() => window.open(image.page, "_blank")}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
