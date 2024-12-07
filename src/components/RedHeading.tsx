// import React from 'react'

// function RedHeading({text,textColor}: any) {
//   return (
//     <div className='flex items-cennter gap-4'>
//       <div className='w-5 h-10 bg-red-500 rounded'></div>
//       <span className={`text-${textColor}-500 font-semibold`}>{text}</span>
//     </div>
//   )
// }

// export default RedHeading


import React from 'react';

function RedHeading({ text, textColor }: { text: string; textColor: string }) {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      {/* Red Bar */}
      <div className="w-3 h-8 md:w-5 md:h-10 bg-red-500 rounded"></div>
      
      {/* Text */}
      <span
        className={`text-${textColor}-500 font-semibold text-base md:text-lg lg:text-xl`}
      >
        {text}
      </span>
    </div>
  );
}

export default RedHeading;
