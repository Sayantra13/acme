

export default function Why(){

const list=[
  {id:'1',src:'/acme/why/1.png', text:'Good food should nourish both people and the planet', text1:'We combine nutrition with planet-first thinking. Using up to 90% less land and 10X less water, our process proves sustainability can be smart and delicious.  A responsible future starts with responsible food.' },
  {id:'2',src:'/acme/why/2.png', text:'Healthy only works if it’s delicious', text1:'We believe wellness is easier when it tastes amazing. Our recipes are designed to satisfy the cravings you actually have. Flavour that hits the spot, without hitting your conscience.' },
  {id:'3',src:'/acme/why/3.png', text:'Healthy only works if it’s delicious', text1:'Nutrition shouldn’t feel like a chore. Our Nutri+ products blend everyday indulgence with everyday nourishment, making wellness easier than ever. Better eating, minus the effort.' },
  {id:'4',src:'/acme/why/4.png', text:'Protein for real life, not just gym life', text1:'Strength isn’t built only in the gym, it’s built in your daily choices. Our responsibly sourced protein supports energy, wellness and everyday performance. A smarter way to fuel your day.' }
]

  return(
    <>
    <div className="bg-[var(--header-color)]">
      <div className="container relative block lg:grid grid-cols-2 p-3 lg:p-10 gap-4">
        <h1 className="lg:sticky top-40 self-start p-4 text-4xl text-center md:text-6xl lg:text-7xl text-white tracking-tighter !font-black ">Why ACME? </h1>
        <div className='grid'>
        {list.map((item,id) => (
          <div key={id} className="w-full lg:w-[90%]"> 
          <div className="bg-[#F94B9E] rounded-xl py-1 px-2 md:px-4 lg:px-5 m-2 md:m-4">
          <img className='my-10' src={item.src}/>
          <div className="text-l md:text-xl lg:text-2xl text-white !font-black ">{item.text}</div>
          <div className="text-l md:text-xl lg:text-2xl text-white ">{item.text1}</div>
          </div>
          </div>
        ))}
        </div>
      </div>
    </div>

      <div className="container lg:w-[65%] my-8 md:my-10">
        <h3 className='text-3xl md:text-6xl lg:text-7xl text-[var(--text-color)] !font-black text-center leading-none tracking-tighter'>Protein snacks that <span className='text-[var(--header-color)]'>*actually*</span> tastes good</h3>
      </div>
    </>
  )
}