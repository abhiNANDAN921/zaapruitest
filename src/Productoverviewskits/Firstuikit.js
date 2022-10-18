import React from 'react';
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
function Firstuikit() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  const [isCopied, setIsCopied] = useState(false);

  const codeSnippet = `
  <div class="bg-white">
  <div class="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Men</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</a>
        </li>
      </ol>
    </nav>

    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>
      <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
      </div>
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl tracking-tight text-gray-900">$192</p>

        <!-- Reviews -->
        <div class="mt-6">
          <h3 class="sr-only">Reviews</h3>
          <div class="flex items-center">
            <div class="flex items-center">
              <!--
                Heroicon name: mini/star

                Active: "text-gray-900", Default: "text-gray-200"
              -->
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <!-- Heroicon name: mini/star -->
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <!-- Heroicon name: mini/star -->
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <!-- Heroicon name: mini/star -->
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <!-- Heroicon name: mini/star -->
              <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
            <p class="sr-only">4 out of 5 stars</p>
            <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
          </div>
        </div>

        <form class="mt-10">
          <!-- Colors -->
          <div>
            <h3 class="text-sm font-medium text-gray-900">Color</h3>

            <fieldset class="mt-4">
              <legend class="sr-only">Choose a color</legend>
              <div class="flex items-center space-x-3">
                <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label">
                  <span id="color-choice-0-label" class="sr-only"> White </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                </label>

                <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label">
                  <span id="color-choice-1-label" class="sr-only"> Gray </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                </label>

                <!--
                  Active and Checked: "ring ring-offset-1"
                  Not Active and Checked: "ring-2"
                -->
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                  <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label">
                  <span id="color-choice-2-label" class="sr-only"> Black </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <!-- Sizes -->
          <div class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium text-gray-900">Size</h3>
              <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
            </div>

            <fieldset class="mt-4">
              <legend class="sr-only">Choose a size</legend>
              <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                  <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label">
                  <span id="size-choice-0-label">XXS</span>

                  <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                    <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                    </svg>
                  </span>
                </label>

                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label">
                  <span id="size-choice-1-label">XS</span>

                  <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label">
                  <span id="size-choice-2-label">S</span>

                  <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label">
                  <span id="size-choice-3-label">M</span>

                  <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label">
                  <span id="size-choice-4-label">L</span>

                  <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label">
                  <span id="size-choice-5-label">XL</span>

                  <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label">
                  <span id="size-choice-6-label">2XL</span>

                  <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <!-- Active: "ring-2 ring-indigo-500" -->
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label">
                  <span id="size-choice-7-label">3XL</span>

                  <!--
                    Active: "border", Not Active: "border-2"
                    Checked: "border-indigo-500", Not Checked: "border-transparent"
                  -->
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        <!-- Description and details -->
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  
  return (
    <>
 
    

    
    
       <section>
   <div class="flex justify-between items-center">
      <div>
         <h4>With image grid</h4>
      </div>
      <div>
         <div class="ml-6 flex items-center">
            <div class="flex space-x-1 rounded-lg bg-slate-100 " >
               <button  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
                           role="tab" type="button"  >
                  <svg class="h-5 w-5 flex-none stroke-sky-500" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10Z"></path>
                     <circle cx="10" cy="10" r="2.25"></circle>
                  </svg>
                  <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-900">Preview</span>
               </button>
               <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
                role="tab" type="button">
                  <svg class="h-5 w-5 flex-none stroke-slate-600" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                     <path d="m13.75 6.75 3.5 3.25-3.5 3.25M6.25 13.25 2.75 10l3.5-3.25"></path>
                  </svg>
                  <span class="sr-only lg:not-sr-only lg:ml-2 text-slate-600">Code</span>
               </button>
            </div>
            <div class="ml-6 mr-3 hidden h-5 w-px bg-slate-900/10 sm:block">
            </div>
            <div class="relative hidden sm:block">
               <svg aria-hidden="true" viewBox="0 0 8 6" width="8" height="6" fill="none" class="pointer-events-none absolute inset-y-0 right-3.5 h-full stroke-slate-500">
                  <path d="M7 1.5l-3 3-3-3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
               </svg>
            </div>
            {/* coppybutton */}
            <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <button class="group relative ml-2 hidden h-9 w-9 items-center justify-center sm:flex">
               <svg class="h-8 w-8 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                  <path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <g class="opacity-0">
                     <path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     <path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     <path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
               </svg>
            </button> }</span>
          </CopyToClipboard>
            
         </div>
      </div>
   </div>
         
    {/* tab */}
    <div>
{/* ui component */}
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
        <div class=" p-8">
  <div class="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Men</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</a>
        </li>
      </ol>
    </nav>


    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center"/>
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center"/>
        </div>
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center"/>
        </div>
      </div>
      <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"/>
      </div>
    </div>


    <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
      </div>

      
      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl tracking-tight text-gray-900">$192</p>

      
        <div class="mt-6">
          <h3 class="sr-only">Reviews</h3>
          <div class="flex items-center">
            <div class="flex items-center">
            
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

            
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

            
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              
              <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
            <p class="sr-only">4 out of 5 stars</p>
            <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
          </div>
        </div>

        <form class="mt-10">
         
          <div>
            <h3 class="text-sm font-medium text-gray-900">Color</h3>

            <fieldset class="mt-4">
              <legend class="sr-only">Choose a color</legend>
              <div class="flex items-center space-x-3">
               
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label"/>
                  <span id="color-choice-0-label" class="sr-only"> White </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                </label>

                
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label"/>
                  <span id="color-choice-1-label" class="sr-only"> Gray </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                </label>

               
                <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                  <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label"/>
                  <span id="color-choice-2-label" class="sr-only"> Black </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                </label>
              </div>
            </fieldset>
          </div>

         
          <div class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium text-gray-900">Size</h3>
              <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
            </div>

            <fieldset class="mt-4">
              <legend class="sr-only">Choose a size</legend>
              <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
         
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                  <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label"/>
                  <span id="size-choice-0-label">XXS</span>

                  <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                    <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                    </svg>
                  </span>
                </label>

             
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label"/>
                  <span id="size-choice-1-label">XS</span>

                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>


                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label"/>
                  <span id="size-choice-2-label">S</span>
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

               
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label"/>
                  <span id="size-choice-3-label">M</span>

                  
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

               
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label"/>
                  <span id="size-choice-4-label">L</span>

                  
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

             
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label"/>
                  <span id="size-choice-5-label">XL</span>

                  
                 
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

              
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label"/>
                  <span id="size-choice-6-label">2XL</span>

                 
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

              
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label"/>
                  <span id="size-choice-7-label">3XL</span>

                  
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
        </form>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      {/* source code */}
        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          
<div class="bg-black">
<pre class="flex overflow-auto rounded-b-lg text-sm leading-[1.5714285714] text-white sm:rounded-t-lg language-html">
   <code class="p-4">
   <pre>{codeSnippet}</pre>
 
</code></pre>
</div>

        </div>

        
        </div>

   </section>


{/* second section */}



    </>
  )
}

export default Firstuikit;
