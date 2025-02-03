"use client";



export default function SimpleItems({item}) {

    return (
        <div className="bg-white shadow-md w-full">
                        <button
                            className="flex border-b items-center justify-between w-full px-4 py-2 text-black"
                        >
                            {item.icon}
                            {item.title}
                            <svg
                                className="h-6 w-6 transform transition-transform duration-300 "

                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            </svg>
                        </button>
                    </div>

    );
}
