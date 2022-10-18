import React from 'react'
import Herobanner from './Herobanner';
import Card from "./Card.js"
import cdata from './cdata.js';
function Home() {
  return (
    <div>
     
      <Herobanner/>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <h2 className="text-2xl pb-4">Componets</h2>
<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
 
{
  cdata.map((val, ind) => {
    return <Card key={ind}
    imgsrc={val.imgsrc}
    title={val.title}
    src={val.src}

    />
  })
}

</div>
<div class="flex justify-center mt-12"><a href="/service" class="relative flex items-center h-10 px-6 text-sm font-medium text-white transition-colors duration-300 bg-blue-800 rounded-lg pointer-events-auto hover:bg-black focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-gray-700">Show All Components</a></div>
</div>
    </div> 
  )
}

export default Home;
