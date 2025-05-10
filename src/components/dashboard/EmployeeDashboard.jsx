import React from 'react'
import Header from '../others/Header'
import TaskCards from '../others/TaskCards'
import TaskList from '../taskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={data} />
      <TaskCards data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
