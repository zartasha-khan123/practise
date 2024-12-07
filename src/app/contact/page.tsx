

     
// import Image from 'next/image';

// export default function ContactPage() {
//   return (
//     <>
//       <main className="min-h-screen bg-gray-100 px-6 py-16 flex justify-center">
//         <div className="w-full max-w-screen-xl flex flex-col lg:flex-row justify-between gap-12">
//           {/* Left Section: Contact Information */}
//           <div className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/3">
//             <div className="text-center flex flex-col mb-8">
//               <Image
//                 src="/phnicon.png"
//                 alt="Phone Icon"
//                 width={40}
//                 height={40}
//                 className="mx-auto"
//               />
//               <h1 className="text-xl font-bold text-gray-900 mb-4">Call To Us</h1>
//               <p className="text-base text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
//               <p className="text-base text-gray-600">Phone: +8801611112222</p>
//             </div>

//             <div className="text-center flex flex-col">
//               <Image
//                 src="/mail.png"
//                 alt="Mail Icon"
//                 width={40}
//                 height={40}
//                 className="mx-auto"
//               />
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Write To Us</h2>
//               <p className="text-base text-gray-600 mb-2">
//                 Fill out our form and we will contact you within 24 hours.
//               </p>
//               <p className="text-base text-gray-600">Email: customer@exclusive.com</p>
//             </div>
//           </div>

//           {/* Right Section: Contact Form */}
//           <div className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-2/3">
//             <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h1>
//             <p className="text-lg text-gray-600 mb-6 text-center">
//               We @aposd love to hear from you. Please fill out the form below to get in touch.
//             </p>

//             <form action="#" method="POST" className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               {/* Message Field */}
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                 //   rows="4"
//                   className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <div className="text-right">
//                 <button
//                   type="submit"
//                   className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }


import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-100 px-6 py-16 flex justify-center">
        <div className="w-full max-w-screen-xl flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section: Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/3 mb-8 lg:mb-0">
            <div className="text-center flex flex-col mb-8">
              <Image
                src="/phnicon.png"
                alt="Phone Icon"
                width={40}
                height={40}
                className="mx-auto"
              />
              <h1 className="text-xl font-bold text-gray-900 mb-4">Call To Us</h1>
              <p className="text-base text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
              <p className="text-base text-gray-600">Phone: +8801611112222</p>
            </div>

            <div className="text-center flex flex-col">
              <Image
                src="/mail.png"
                alt="Mail Icon"
                width={40}
                height={40}
                className="mx-auto"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-4">Write To Us</h2>
              <p className="text-base text-gray-600 mb-2">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-base text-gray-600">Email: customer@exclusive.com</p>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-2/3">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              We&apos;d love to hear from you. Please fill out the form below to get in touch.
            </p>

            <form action="#" method="POST" className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                //   rows="4"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
