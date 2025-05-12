import React from 'react';

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-white py-1 px-3 rounded-full text-xs font-medium shadow">
          {data.category}
        </span>
        <span className="text-xs text-gray-800 font-semibold">{data.date}</span>
      </div>

      <h2 className="mt-4 text-xl font-bold text-gray-900">{data.title}</h2>
      <p className="text-sm text-gray-800 mt-2 leading-relaxed">{data.description}</p>

      <div className="flex justify-between mt-6 space-x-2">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200" onClick={onComplete}>
          Mark as Completed
        </button>
        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200" onClick={onFail}>
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
