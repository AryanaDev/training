"use client";
import { useState } from "react";

export default function SimpleItems() {
    const [open, setOpen] = useState(null);

    const toggle = (section) => {
        setOpen(open === section ? null : section);
    };

    return (
            <div className="bg-white rounded-md shadow-md w-full">
                <div className="border-b">
                    {/* Menu Header */}
                    <button
                        onClick={() => toggle(0)}
                        className={`flex items-center justify-between w-full px-4 py-2 text-black ${
                            open === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                    >
                        Simple 1
                    </button>
                </div>
            </div>
    );
}
