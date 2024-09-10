import React from 'react'

function LeftSider() {
  return (
 <div className="fixed left-10 bottom-0 sm:static">
      <div className='flex flex-col items-center '>
     <div className='flex flex-col gap-3 sm:flex-row sm:mb-10'>
        <a href="https://x.com/muntazar_io"><i class="ri-twitter-x-line text-gray-500 text-xl sm:text-5xl"></i></a>
        <a href="https://github.com/muntazar-se"><i class="ri-github-fill  text-gray-500 text-xl  sm:text-5xl"></i></a>
        <a href="https://www.linkedin.com/in/muntazar/"><i class="ri-linkedin-box-fill  text-gray-500 text-xl  sm:text-5xl"></i></a>
        <a href="mailto:muntadher.alakraa@gmail.com"><i class="ri-mail-line text-gray-600 text-xl  sm:text-5xl"></i></a>   
    </div>
    <div className="w-[1px] h-32  bg-gray-500 sm:hidden"></div>
   </div>
 </div>
  )
}
export default LeftSider;
