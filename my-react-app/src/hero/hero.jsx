
import { useState, useEffect } from 'react'


export default function Hero() {
  const [Set, setSet] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSet((prevSet) => (prevSet === 1 ? 0 : prevSet + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const list = [
    "NO MAIDA",
    "NO PALM OIL",
    "NO MSG",
    "RICH IN FIBRE",
  ]

  const list2 = [...list, ...list, ...list, ...list]

  const style = {
    display: "flex",
    animation: "animation 20s linear infinite",
  }

  return (
    <>
      <div className="flex">
        <img className="w-full" src={`/acme/hero/${Set + 1}.png`} alt={`Hero ${Set + 1}`} />
      </div>

      <div className="inline-block my-10 justify-center items-center w-full overflow-x-hidden" >
        <div style={style} className="flex gap-2 md:gap-3">
          {list2.map((item, index) => (
            <div key={index} className="flex-shrink-0 flex items-center" >

              <span className="!font-bold text-[16px] md:text-[18px] text-[#FF470B] mr-2">{item}</span>
              <img className="w-[16px]" src="/acme/hero/star.png" alt="star" />

            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes animation {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  )
}