import React from "react";

const SwitAlert = ({ isOpen, onClose, formData }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        User Information
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>

                <div className="p-4">
                    <p className="text-gray-500 dark:text-gray-400">
                        <strong>First Name:</strong> {formData.firstName}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        <strong>Address:</strong> {formData.address}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        <strong>Gender:</strong> {formData.gender}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SwitAlert;
