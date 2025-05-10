import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 py-1 px-3 rounded-xl text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>{data.description}</p>
      <div className='mt-4 '>
        <button className='bg-green-600 px-5 py-2 rounded-xl font-semibold text-xl'>Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask
