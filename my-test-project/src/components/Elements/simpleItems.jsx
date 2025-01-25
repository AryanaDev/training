"use client";

import { RiAdminFill } from "react-icons/ri";
import { MdOutlineViewModule } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
export default function SimpleItems() {

    return (
        <div className="bg-white rounded-md shadow-md w-full">
            <div className="border-b">
                {/* Menu Header */}
                <div className="border-b">
                    <div className="border-b">
                        <button
                            className="flex border-b items-center justify-between w-full px-4 py-2 text-black"
                        >
                            <RiAdminFill/>
                            Admin Dashboard
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
                        <button
                            className="flex border-b items-center justify-between w-full px-4 py-2 text-black"
                        >
                            <MdOutlineViewModule/>
                            Modules
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
                        <button
                            className="flex border-b items-center justify-between w-full px-4 py-2 text-black"
                        >
                            <MdManageAccounts/>
                            Manage Account
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
                        <button
                            className="flex border-b items-center justify-between w-full px-4 py-2 text-black"
                        >
                            <FaQuestionCircle />
                            FAQ
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
                </div>
            </div>
        </div>

    );
}
