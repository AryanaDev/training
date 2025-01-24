"use client";
import { useState } from "react";

export default function HardItems() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (

            <div className="bg-white rounded-md shadow-md w-full">
                <div className="border-b">
                    {/* Menu Header */}
                    <button
                        onClick={() => toggleSection(0)}
                        className={`flex items-center justify-between w-full px-4 py-2 text-black ${
                            openSection === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                    >
                        Setting 1
                        <svg
                            className={`h-6 w-6 transform transition-transform duration-300 ${
                                openSection === 0 ? "rotate-180" : ""
                            }`}
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                        </svg>
                    </button>

                    {/* Dropdown Content */}
                    {openSection === 0 && (
                        <div className="bg-gray-50 text-black">
                            <div className="px-4 py-2 space-y-2">
                                <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                                    TEST 1
                                </div>
                                 <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                                    TEST 2
                                </div>
                                <div className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                                    TEST 3
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

    );
}
