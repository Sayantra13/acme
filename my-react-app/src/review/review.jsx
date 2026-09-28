import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Review() {

  const sliderRef = useRef(null);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  const list = [
    { name: "Ansh", text: "As a working professional, I've tried quite a few protein snacks, but most don't feel like something I can eat every day. Acme really stands out, it's light, tastes great, and feels like a genuinely healthy option. It's now my go-to snack during a busy workday.", },
    { name: "Ansh", text: "As a working professional, I've tried quite a few protein snacks, but most don't feel like something I can eat every day. Acme really stands out, it's light, tastes great, and feels like a genuinely healthy option. It's now my go-to snack during a busy workday.", },
    { name: "Ansh", text: "As a working professional, I've tried quite a few protein snacks, but most don't feel like something I can eat every day. Acme really stands out, it's light, tastes great, and feels like a genuinely healthy option. It's now my go-to snack during a busy workday.", },
    { name: "Ansh", text: "As a working professional, I've tried quite a few protein snacks, but most don't feel like something I can eat every day. Acme really stands out, it's light, tastes great, and feels like a genuinely healthy option. It's now my go-to snack during a busy workday.", },
    { name: "Ansh", text: "As a working professional, I've tried quite a few protein snacks, but most don't feel like something I can eat every day. Acme really stands out, it's light, tastes great, and feels like a genuinely healthy option. It's now my go-to snack during a busy workday.", },
    { name: "Ansh", text: "As a working professional, I've tried quite a few protein snacks, but most don't feel like something I can eat every day. Acme really stands out, it's light, tastes great, and feels like a genuinely healthy option. It's now my go-to snack during a busy workday.", },
  ];

  return (
    <div className="bg-[#D4075F] relative py-10 mt-30">
      <h2 className="text-center text-white !font-black text-4xl sm:text-5xl lg:text-6xl leading-none block max-w-2xl mx-auto mb-12">Straight from the<br />snack obsessed</h2>
      <div className="container mx-auto">
        <div className="lg:flex justify-between hidden mx-auto max-w-[700px] my-6">
          <button onClick={() => sliderRef.current?.slickPrev()} className="z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full text-black bg-white flex items-center justify-center text-2xl font-bold ">{"<"}</button>
          <button onClick={() => sliderRef.current?.slickNext()} className="z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full text-black bg-white flex items-center justify-center text-2xl font-bold ">{">"}</button>
        </div>

        <div className="p-4">
          <Slider ref={sliderRef} {...settings}>
            {list.map((item, index) => (
              <div key={index} className="px-6 sm:px-8 lg:px-15">
                <div className="h-[380px] sm:h-[400px] lg:h-[500px] border border-white rounded-2xl flex flex-col items-center justify-center text-center px-5 sm:px-8">
                  <div className="flex my-5">
                    <img src="/acme/review/star.png" className="w-24 sm:w-28 lg:w-30" />
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gray-200 my-5"></div>
                  <p className="text-white text-[11px] sm:text-sm lg:text-base leading-tight !font-semibold my-4">"{item.text}"</p>
                  <h3 className="text-white md:text-sm !font-bold">{item.name}</h3>
                </div>
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </div>
  );
}