import React from "react";


export default function Quize() {
  return (
    <div className="space-y-2 flex justify-center items-center flex-col">
      <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-72 p-4 rounded-md flex justify-between items-center shadow">
        <div className="flex items-center space-x-5">
      
          <h2 className="text-lg">Google Pay</h2>
        </div>
        <input
          type="radio"
          name="payment"
          className="checked:border-indigo-500 h-5 w-5"
        />
      </label>
      <label className="has-[:checked]:bg-white/30 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 has-[:checked]:ring-2 cursor-pointer bg-white/40 hover:bg-white/20 w-72 p-4 rounded-md flex justify-between items-center shadow">
        <div className="flex items-center space-x-5">
       
          <h2 className="text-lg">Apple Pay</h2>
        </div>
        <input
          type="radio"
          name="payment"
          className="checked:border-indigo-500 h-5 w-5"
        />
      </label>
    </div>
  );
}
