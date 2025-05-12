import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-white py-1 px-3 rounded-full text-xs font-medium shadow">
          {data.category}
        </span>
        <span className="text-xs text-gray-800 font-semibold">{data.date}</span>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-900">{data.title}</h2>
      <p className="text-sm text-gray-800 mt-2 leading-relaxed">{data.description}</p>

      <div className="mt-6">
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-base font-semibold rounded-lg transition-all duration-200"
          disabled
        >
          ✅ Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
