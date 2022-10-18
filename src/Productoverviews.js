import React from 'react';
import Firstuikit from "./Productoverviewskits/Firstuikit";
import Seconduikit from "./Productoverviewskits/Seconduikit"




function Productoverviews() {
  
  
  return (
    <>
    <div>
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div>
      <div class="flex flex-col"><h1 class="mt-3 mb-5 text-3xl font-extrabold tracking-tight text-slate-900">Product Overviews</h1>
    </div>
       </div>
    <Firstuikit/>
    <br></br>
        <Seconduikit/>
        </div>
      </div>
    </>
  )
}

export default Productoverviews;
