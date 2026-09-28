


export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text-color)]">
      <div className="w-[90%] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-black !font-bold text-sm mb-5">QUICK LINKS</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:underline"> About </a>
              <a href="#" className="block hover:underline"> Contact us </a>
              <a href="#" className="block hover:underline"> FAQ </a>
              <a href="#" className="block hover:underline"> BMI Calculator </a>
              <a href="#" className="block hover:underline"> Shipping Policy </a>
              <a href="#" className="block hover:underline"> Return Policy </a>
            </div>
          </div>

          <div>
            <h3 className="text-black !font-bold text-sm mb-5">TRENDING CATEGORIES</h3>

            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:underline"> Nutri Noodles </a>
              <a href="#" className="block hover:underline"> Protein Bars </a>
              <a href="#" className="block hover:underline"> Corn Puffs </a>
              <a href="#" className="block hover:underline"> Nutri Sticks </a>
              <a href="#" className="block hover:underline"> Perfect Dates </a>
              <a href="#" className="block hover:underline"> Atta </a>
            </div>
          </div>


          <div>
            <h3 className="text-black !font-bold text-sm mb-5">MAIL US</h3>
            <p className="text-sm mb-5"> greentech.foods@acme.in </p>
            <h3 className="text-black !font-bold text-sm mb-3"> CALL US </h3>
            <p className="text-sm leading-4"> +91 858807805 <br /> ACME Poshan (Division of Acme Group), <br /> Plot No. 152, Sector 44, Gurugram - 122002, <br /> Haryana, India <br /> Monday - Saturday, 10 AM to 6 PM (IST) </p>
          </div>


          <div className="bg-[#F2D900] p-6">
            <h3 className="text-black !font-bold text-sm mb-4">
              Subscribe
            </h3>
            <div className="flex w-full">
              <input type="email" placeholder="Email address" className="w-full min-w-0 p-3 bg-white text-xs outline-none rounded-l-md"/>
              <button className="w-12 bg-[#4285F4] text-white flex items-center justify-center rounded-r-md">→</button>
            </div>
            <p className="text-xs mt-6 mb-3">Also available on</p>
            <div className="flex items-center gap-4 text-xs !font-bold">
              <img className='w-10 cursor-pointer' src='/acme/footer/amazon.png'/>
              <img className='w-10 cursor-pointer' src='/acme/footer/flipcart.png'/>
            </div>
          </div>
        </div>


        <div className="border-t border-[#e4cf00] mt-16 pt-5">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
              <img className='w-[30%] lg:w-[10%]' src='/acme/header/logo.png'/>

            <div className="flex gap-7 text-xs text-black">
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Cookies</a>
            </div>


            <div className="flex items-center gap-3">
              <img className='w-10 cursor-pointer' src='/acme/footer/Linkedin.png'/>
              <img className='w-10 cursor-pointer' src='/acme/footer/Facebook.png'/>
              <img className='w-10 cursor-pointer' src='/acme/footer/Twitter.png'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}