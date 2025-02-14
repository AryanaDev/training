"use client"
import React from "react";
export default function Input({
    id,onChange,type,placeholder,simpleInputTitle
                              }) {

return(
        <div className="max-w-sm mx-auto">
            <label  className="block text-black mb-2 text-sm font-medium text-start">{simpleInputTitle}
             </label>
            <input onChange={onChange} type={type} id={id} aria-describedby="helper-text-explanation"
                   className=" w-[500px] border bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  "
                   placeholder={placeholder}/>
        </div>

    )
}