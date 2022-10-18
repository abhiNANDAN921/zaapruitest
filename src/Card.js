import React from 'react'
function Card(props) {
  return (
    <>
    <a href={props.src}>
<div class="max-w-sm p-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
   
        <img class="rounded-t-lg"   src={props.imgsrc} alt=""/>

    <div class="pt-4">
        <a href="#">
            <h5 class="  font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <p class=" font-normal text-gray-700 dark:text-gray-400">Components</p>
        
    </div>

</div>
</a>
    </>
  )
}

export default Card
