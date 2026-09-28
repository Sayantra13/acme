
import { useState } from 'react'

export default function Bestseller() {

  const [counts, setCounts] = useState({})

  const [hoveredId, setHoveredId] = useState(null)


    const increaseCount = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
  }

  const decreaseCount = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }))
  }

  const items=[
    {id:"1" ,src:"/acme/bestseller/1.png", name:"Spicy Fusion Puffs" },
    {id:"2" ,src:"/acme/bestseller/2.png", name:"Korean Chilli Noodles" },
    {id:"3" ,src:"/acme/bestseller/3.png", name:"Masala Masti Puffs" }
  ]

  return (
    <div className="container lg:items-center lg:justify-center relative">
      <div className="grid justify-center gap-6">
      <h1 className="text lg:text-center !font-black tracking-tighter text-[var(--header-color)] mx-4 lg:mx-0 text-5xl md:text-5xl lg:text-6xl ">
        Our Bestseller
        </h1>
        <button className="md:absolute w-fit mx-auto md:right-15 flex right-0 top-0 md:top-[10px] lg:top-[-20px] border-1 text-l px-2 py-1 lg:px-4 lg:py-2 rounded-md lg:mt-8 mx-4 lg:mx-0">
          Shop All
        </button>
        </div>

        <div className="flex flex-nowrap no-scrollbar lg:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overflow-x-auto lg:justify-between mx-auto mt-4 lg:mt-10">

          {items.map((item, id) => (
            <div key={id} className='grid w-full rounded-2xl '>
              <div  className="w-[250px] md:w-[500px] lg:w-full rounded-lg"><img className="w-full transition-transform duration-400 ease-in-out" style={{ transform: hoveredId === item.id? 'scale(1.1) rotate(-12.5deg)': 'scale(1) rotate(0deg)'}} onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)} src={item.src} alt={item.name}/></div>
              <h3 className='text text-center text-[var(--text-color)] !font-extrabold text-l md:text-2xl'>{item.name}</h3>
              <h3 className='text text-center text-[var(--text-color)] !font-extrabold text-l my-1 md:my-2 md:text-2xl'>₹40</h3>
              <div className='flex justify-center gap-4 items-center my-3'>
                <div className="flex gap-4 bg-[var(--button-bg)] !font-semibold text-[var(--button-color)] text-[14px] md:text-[18px] py-1 px-2 rounded-lg "><button onClick={() => decreaseCount(item.id)}>-</button><span> {counts[item.id] || 0}</span><button onClick={() => increaseCount(item.id)}>+</button></div>
                <button className="bg-[var(--button-bg)] text-[var(--button-color)] !font-semibold text-[14px] md:text-[18px] py-1 px-6 md:px-10 rounded-lg">Add to cart</button>
              </div>
              <button className='bg-[var(--button-bg)] mx-auto w-[85%] md:w-[55%] my-2 text-[var(--button-color)] !font-semibold text-[14px] md:text-[18px] py-1 rounded-lg '>Buy Now</button>
            </div>
          ))} 
        </div>
    </div>
  )
}
