import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestSlider() {

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    draggable: true,
    swipe:true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };


  const list = [
    { color: '#ED0C6DD1', text: 'NUTRI PUFFS', src: '/acme/slick/1.png' },
    { color: '#F99C01D1', text: 'NUTRI NOODLES', src: '/acme/slick/2.png' },
    { color: '#FF470BD1', text: 'NUTRI STICKS', src: '/acme/slick/3.png' },
    { color: '#A07FD2ED', text: 'PROTEIN BAR', src: '/acme/slick/4.png' },
    { color: '#748C2CD1', text: 'HIGH PROTEIN NUTRI AATA', src: '/acme/slick/5.png' },
  ]
  return (
    <div className="relative container w-[80%] !mx-auto lg:my-40 my-20 ">
      <button onClick={() => sliderRef.current?.slickPrev()} className="absolute left-[-6%] top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold cursor-pointer">←</button>
    
      <div className="block">
        <Slider ref={sliderRef} {...settings}>
          {list.map((item, index) => (
            <div key={index} className="px-3 ">
              <div className="group relative h-60 w-60 md:h-70 md:w-70 overflow-hidden flex items-center justify-center cursor-pointer" style={{ backgroundColor: item.color }}>
                <img src={item.src} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-100 transition-opacity duration-500 " />
                <span className=" relative z-10 text-white text-3xl sm:text-5xl font-black text-center leading-none transition-opacity duration-500 group-hover:opacity-0">
                  {item.text}
                </span>
              </div>
            </div>
          ))}

        </Slider>
      </div>

      <button onClick={() => sliderRef.current?.slickNext()} className="absolute right-[-5%] lg:right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold -pointer">→</button>

    </div>
  );
}