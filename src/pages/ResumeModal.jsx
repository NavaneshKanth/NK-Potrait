import React from 'react';
import { motion } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative text-center"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-red-500 transition"
                    title="Close"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    📄 Download My Resume
                </h2>

                {/* Download Button */}
                <a
                    href="/NavaneshKanth_FrontendDeveloper_2025.pdf"
                    download
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
                >
                    ⬇️ Download Resume
                </a>
            </motion.div>
        </div>
    );
}
