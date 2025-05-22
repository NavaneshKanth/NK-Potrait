import React, { useState } from 'react';
import resumeImage from '../assets/resume-preview.png'; // or your uploaded image
import './ResumePreview.css'; // Add styles here or use Tailwind

const ResumePreview = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center w-full mt-10">
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white w-full max-w-4xl text-center">
    <h2 className="text-2xl font-bold mb-4">Quick Resume Preview</h2>

    {!show ? (
      <button
        onClick={() => setShow(true)}
        className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-200 transition"
      >
        View Resume
      </button>
    ) : (
      <div className="relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 px-3 py-1 rounded-full text-lg"
        >
          ✖
        </button>
        <img
          src={resumeImage}
          alt="Resume Preview"
          className="w-full max-w-[700px] h-auto mx-auto rounded-md shadow-xl transition-transform hover:scale-105"
        />
      </div>
    )}
  </div>
</div>

  );
};

export default ResumePreview;
