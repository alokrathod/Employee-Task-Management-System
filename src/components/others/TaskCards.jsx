import React from 'react'

const TaskCards = ({data}) => {
  return (
    <div className='flex flex-wrap mt-10 justify-start gap-5 screen'>
      <div className='rounded-xl py-4 px-9 bg-blue-400 w-full sm:w-[48%] lg:w-[23%] min-w-[200px]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-2xl font-medium'>New tasks</h3>
      </div>
      <div className='rounded-xl py-4 px-9 bg-green-400 w-full sm:w-[48%] lg:w-[23%] min-w-[200px]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed</h3>
      </div>
      <div className='rounded-xl py-4 px-9 bg-yellow-400 w-full sm:w-[48%] lg:w-[23%] min-w-[200px]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-2xl font-medium'>Accepted</h3>
      </div>
      <div className='rounded-xl py-4 px-9 bg-red-400 w-full sm:w-[48%] lg:w-[23%] min-w-[200px]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskCards
