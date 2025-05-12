import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({title, description, date, category, active: false, newTask: true, completed: false, failed: false})

    const data = userData.employees;
    console.log(data)

    data.forEach((elem) => {
      if(assignTo == elem.name) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    })

    // setUserData(data)

    setTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="p-6 sm:p-10 mt-10 mx-auto bg-[#1C1C1C] border border-gray-600 backdrop-blur-sm rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
      <form onSubmit={submitHandler} className="flex flex-col md:flex-row gap-6">
        {/* LEFT SIDE: Fields except description */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a new task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Description & Submit Button */}
        <div className="flex-1 flex flex-col gap-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Description
          </label>
          <textarea
            rows="10"
            placeholder="Describe the task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none flex-grow"
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md transition 
                        hover:bg-blue-700 hover:opacity-90 
                        active:bg-blue-800 active:scale-95"
            >
              Create Task
            </button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
