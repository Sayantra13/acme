

export default function Story() {
  return (
    <>
      <div className="relative lg:left-[-10%] w-full flex justify-center px-4 md:px-6 lg:px-10">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mt-10 md:mt-16 lg:mt-24">
            <div className="w-full col-span-2 overflow-hidden rounded-[30px]">
              <img className="w-full h-70 lg:h-180 object-cover rounded-[30px] block" src="/acme/acmestory/1a.png" alt="Crunchy Upgrade" />
            </div>
            <div className="flex flex-col justify-center px-2 md:px-4 lg:px-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl !font-black text-[var(--header-color)] tracking-tight leading-none">CRUNCHY UPGRADE</h1>
              <p className="text-sm md:text-base lg:text-lg my-4 !font-light tracking-wide leading-relaxed text-gray-700">ACME was built on a simple belief: progress should never come at the cost of the planet. Long before entering the FMCG space, our work focused on pioneering sustainable innovations including green ammonia, green hydrogen and solar-powered solutions, designed to enable a cleaner, more responsible future.</p>
              <button className="bg-[var(--button-bg)] px-5 py-2.5 text-[var(--button-color)] !font-semibold rounded-md w-full lg:w-fit">Read our story</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}