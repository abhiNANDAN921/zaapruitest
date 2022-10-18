import React from 'react'
import Card from "./Card.js"
import cdata from './cdata.js'
function Service() {
  return (
    <>
    



<div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
  
<div class="grid lg:grid-cols-4 justify-center md:grid-cols-3 sm:grid-cols-1 gap-4">
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
</div>
    </> 
  )
}

export default Service;
