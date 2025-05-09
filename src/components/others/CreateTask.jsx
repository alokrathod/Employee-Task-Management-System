import React from 'react';

const CreateTask = () => {
  return (
    <div className="p-6 sm:p-10 mt-10 mx-auto bg-[#1C1C1C] border border-gray-600 backdrop-blur-sm rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-6">Create New Task</h2>

      <form className="flex flex-col md:flex-row gap-6">
        {/* LEFT SIDE: All fields except description */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a new task"
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Assign To
            </label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Category
            </label>
            <input
              type="text"
              placeholder="design, dev, etc."
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-auto">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Create Task
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Description only */}
        <div className="flex-1 flex flex-col">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <textarea
            rows="10"
            placeholder="Describe the task"
            className="w-full h-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none flex-grow"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
