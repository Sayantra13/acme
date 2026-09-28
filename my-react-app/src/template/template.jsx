


export default function Template(){

  const style={
    animation: "moveUpDown 2s ease-in-out infinite",
  }
  return(
    <div className="bg-[#FBE209] ">
      <div className='relative container w-full flex pb-10 mt-25 md:mt-60 pt-50 md:pt-80 lg:py-45'>
      <h3 className='!font-black w-[70%] md:w-[80%] mx-auto lg:mx-0 text-3xl md:text-6xl lg:text-6xl lg:ml-[10%]  tracking-tight  lg:w-[50%] text-[var(--text-color)] '>Snacks so <span className='text-[var(--header-color)] '>*good*</span> they won’t last</h3>
      <div className="absolute bottom-[35%] left-0 lg:top-[-25%] lg:left-[48%] rotate-[-22.07deg]"><img style={style}  className=' w-[300px] md:w-[600px]' src='/acme/bestseller/3.png'/></div>
    </div>
    <style>{`
    @keyframes moveUpDown {
  0%, 100% {
    transform: translate(0px,0);
  }
  50% {
    transform: translate(13px,-40px);
  }
}
`}</style>
    </div>
  )
}