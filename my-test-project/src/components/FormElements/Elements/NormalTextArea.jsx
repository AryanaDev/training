"use client"
import React from "react";
export default function NormalTextArea({
                                  id,onChange,rows,placeholder,textAreaTitle
                              }) {
    return (

        <div className="max-w-sm mx-auto">
            <label className="block text-black mb-2 text-sm font-medium text-start">{textAreaTitle}
            </label>
            <textarea id={id} rows={rows} onChange={onChange}
                               className="block p-2.5 w-[500px] text-sm text-gray-900 bg-gray-50  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                               placeholder={placeholder}>
        </textarea>
        </div>

    )
}