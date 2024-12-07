
import React from "react";
import Image from "next/image";

export default function SignupForm() {
    return (
    //   <div className="w-max-[1305px] m-auto mt-[60px] flex justify-between">
    //     <Image src='/side Image.png' width={700} height={781} alt='main'></Image>
    //     <h2 className="text-2xl font-bold text-gray-800">Create an account</h2>
    //     <p className="mt-2 text-gray-600">Enter your details below</p>
  
    //     <form className="mt-6">
    //       {/* Name Input */}
    //       <div className="mb-4">
    //         <label className="block text-gray-700">Name</label>
    //         <input
    //           type="text"
    //           placeholder="Name"
    //           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    //         />
    //       </div>
  
    //       {/* Email/Phone Input */}
    //       <div className="mb-4">
    //         <label className="block text-gray-700">Email or Phone Number</label>
    //         <input
    //           type="email"
    //           placeholder="Email or Phone Number"
    //           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    //         />
    //       </div>
  
    //       {/* Password Input */}
    //       <div className="mb-4">
    //         <label className="block text-gray-700">Password</label>
    //         <input
    //           type="password"
    //           placeholder="Password"
    //           className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    //         />
    //       </div>
  
    //       {/* Create Account Button */}
    //       <button
    //         type="submit"
    //         className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
    //       >
    //         Create Account
    //       </button>
  
    //       {/* Social Login */}
    //       <div className="mt-4 text-center">
    //         <button
    //           type="button"
    //           className="w-full py-3 bg-gray-200 text-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300"
    //         >
    //           <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
    //           Sign up with Google
    //         </button>
    //       </div>
  
    //       {/* Already Have an Account */}
    //       <p className="mt-4 text-center text-gray-600">
    //         Already have an account?{" "}
    //         <a href="/login" className="text-red-500 hover:underline">
    //           Log in
    //         </a>
    //       </p>
    //     </form>
    //   </div>


    <div className="max-w-[1305px] mx-auto mt-[60px] flex flex-col md:flex-row items-center justify-between px-4">
  {/* Left Section: Image */}
  <div className="flex-shrink-0">
    <Image
      src="/Side Image.png"
      width={805}
      height={781}
      alt="main"
      className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[800px] object-contain"
    />
  </div>

  {/* Right Section: Create Account Form */}
  <div className="mt-8 md:mt-0 md:ml-10 w-full max-w-[400px] bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800">Create an account</h2>
    <p className="mt-2 text-gray-600">Enter your details below</p>

    <form className="mt-6">
      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Email/Phone Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Email or Phone Number</label>
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Create Account Button */}
      <button
        type="submit"
        className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Create Account
      </button>

      {/* Social Login */}
      <div className="mt-4 text-center">
        <button
          type="button"
          className="w-full py-3 bg-gray-200 text-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300"
        >
          <Image src="/Icon-Google.png" width={5} height={5} alt="Google" className="w-5 h-5" />
          Sign up with Google
        </button>
      </div>

      {/* Already Have an Account */}
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-red-500 hover:underline">
          Log in
        </a>
      </p>
    </form>
  </div>
</div>

    );
  }
  