import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reel() {

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    centerPadding: '30px',
    draggable: true,
    swipe: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const list1 = [
    { text: 'NO PALM OIL', color: '#A07FD2' },
    { text: 'NO MSG', color: '#FF006E' },
    { text: 'LOW CHOLESTROL', color: '#FF470B' },
    { text: 'HIGH IN FIBRE', color: '#F99C01' },
    { text: 'NO ARTIFICIAL COLOUR', color: '#D2D641' },
    { text: 'RICH IN TASTE', color: '#748C2C' }
  ]

  const list = [...list1, ...list1, ...list1];
  const style = {
    display: "flex",
    animation: "animation 20s linear infinite",
  }

  const item1 = [
    { src: '/acme/reel/1.png' },
    { src: '/acme/reel/2.png' },
    { src: '/acme/reel/3.png' },
    { src: '/acme/reel/4.png' },
  ]

  const items = [...item1, ...item1, ...item1];

  return (
    <>
      <div className="inline-block justify-center items-center w-full my-8 md:my-10 overflow-x-hidden " >
        <div style={style} className="flex justify-center items-center gap-10 md:gap-20">
          {list.map((list, index) => (
            <div key={index} style={{ backgroundColor: list.color }} className='flex flex-shrink-0 text-center justify-center items-center text-sm md:text-xl aspect-square w-30 md:w-40  md:p-10 text-white !font-black rounded-full'><span>{list.text}</span></div>
          ))}
        </div>
      </div>

      <div className="w-full"><img src='/acme/reel/label.png' /></div>

      <h3 className="text-xl md:text-2xl lg:text-4xl !font-black text-center my-8 lg:my-20 text-[var(--text-color)]">REAL CREATORS. REAL ROUTINES. REAL PROTEIN.</h3>

      <div className="relative container">
        <button onClick={() => sliderRef.current?.slickPrev()} className="absolute hidden md:block left-[5%]  top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center text-2xl !font-bold ">←</button>

        <div className="relative">
          <Slider className=" ml-2 sm:ml-4 " ref={sliderRef} {...settings}>
            {items.map((item, index) => (
              <div key={index} className="px-3 mx-auto ">
                <div className="w-[150px] md:w-[225px] lg:w-[300px] rounded-lg"><img className="w-full" src={item.src} /></div>
              </div>
            ))}

          </Slider>
        </div>
        <button onClick={() => sliderRef.current?.slickNext()} className="absolute hidden md:block right-[5%] top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center text-2xl !font-bold ">→</button>
      </div>
    </>
  )
}