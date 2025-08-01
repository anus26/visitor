import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Visitor = () => {
 const [data,setData]=useState([])

  useEffect(()=>{
    const Data =async()=>{
      try {
        const res=await axios.get('https://minor-charmane-anusraza123bm-0738bb06.koyeb.app/api/visitor')
        setData(res.data.visits)
        console.log('get data',res.data.visits);
        
      } catch (error) {
        
      }
    }
    Data()
  },[])

  return (
<>
<section>
  <div>
    <h1 className='flex items-center font-semibold justify-center m-10 text-3xl '>Visitor Data</h1>
<div className='flex justify-between'>
  <h1>Browser</h1>
    <h1>Browser</h1>
      <h1>Browser</h1>
</div>
   {Array.isArray(data)&&data?.map((visits, id) => (
 
  <div key={id} className='border-2   gap-7  sm:gap-4 flex justify-between m-2   hover:border-gray-200 '>
    <p className='ga-5 sm:gap-2 xs:gap-1 '>{visits.browser}</p>

    <p className='gap-5 '>{visits.device}</p>
    <p className='gap-5 '>{visits.ip}</p>

    <p></p>
    
  </div>

))}



  </div>
</section>
</>
  )
}

export default Visitor