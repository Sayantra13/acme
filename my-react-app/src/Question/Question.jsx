
import { useState } from 'react'

export default function Question(){

  const [open, setOpen] = useState(null);

  const active = (id) => {
  setOpen(open === id ? null : id);
};

  const list1=[
    {id:'1', question:'What makes ACME Poshan different from other protein or healthy snack brands?', ans:'Unlike most processed snacks, we use sustainable, fermentation-based protein sources such as vegan yeast and myco-proteins that are light on the planet and easy on digestion.'},
    {id:'3', question:'Are your products 100% vegetarian or vegan?', ans:'Yes. All ACME Poshan products are 100% vegetarian, and many are vegan-friendly, made using plant or fermentation-based proteins without animal-derived ingredients.'},
    {id:'5', question:'Are your products safe for childrens and families?', ans:'Absolutely. ACME Poshan products are designed for all ages groups from school kids to working adults offering clean, balanced nutrition made from trustworthy, everyday ingredients.'},
  ]
  const list2=[
    {id:'2', question:'What does clean label mean in ACME Poshan?', ans:'Clean Label means complete transparency. Every ingredient in our products is simple, recognizable, and free from preservatives, palm oil, artificial colors, or hidden additives.'},
    {id:'4', question:'Where are ACME Poshan products made?', ans:'All our products are proudly made in India, crafted under energy-efficient, renewable-aligned facilities built by ACME Group, one of India’s pioneers in clean energy and sustainability.'},
    {id:'6', question:'What certifications or quality checks do your products follow?', ans:'Each product goes through stringent safety, hygiene, and quality checks as per Indian FSSAI standards.'},
  ]

  return(
    <>
    <div className="py-20 w-[90%] lg:w-[70%] mx-auto">
      <h3 className='text-[var(--text-color)] text-4xl !font-black text-center '>Frequently Ask Questions</h3>
      <h3 className='text-[var(--text-color)] text-2xl !font-medium text-center '>Real answers, no junk</h3>
      <div className="block lg:grid grid-cols-2 gap-10 lg:py-20 items-start">

        <div className="grid gap-6 my-6 lg:my-0">
        {list1.map((list)=>{
          const openid = open === list.id;
          return(
          <div key={list.id} className="w-full min-h-[125px] py-2 grid items-center bg-[#F99C01] px-6 rounded cursor-pointer transition-all duration-300" onClick={()=>active(list.id)}> 
          <div className="flex w-full justify-between gap-6 mb-4 align-center items-center">
          <span className='text-white !font-semibold text-l '>{list.question}</span>
          <span className='text-white !font-semibold text-l '>{openid? '▲' : '▼'}</span>
          </div>
          {openid && (
              <p className='text-white text-l w-[90%] block duration-300'>
                {list.ans}
              </p>
          )}
          </div>
        )})}
        </div>


        <div className="grid gap-6 my-6 lg:my-0">
        {list2.map((list)=>{
          const openid = open === list.id;
          return(
          <div key={list.id} className="w-full min-h-[125px] py-2 grid items-center bg-[#F99C01] px-6 rounded cursor-pointer transition-all duration-300" onClick={()=>active(list.id)}> 
          <div className="flex w-full justify-between gap-6 mb-4 items-center">
          <span className='text-white !font-semibold text-l '>{list.question}</span>
          <span className='text-white !font-semibold text-l '>{openid? '▲' : '▼'}</span>
          </div>
          {openid && (
              <p className='text-white text-l w-[90%] block duration-300'>
                {list.ans}
              </p>
          )}
          </div>
        )})}
        </div>

        
      </div>
    </div>
    </>
  )
}