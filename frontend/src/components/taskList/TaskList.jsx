import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { setLocalStorage } from '../../utils/localStorage'

const TaskList = ({data}) => {

  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (taskIdx, newStatus) => {
    // update the task array
    const updatedTasks = data.tasks.map((task, idx) => {
      if(idx !== taskIdx) return task;
      return {
        ...task,
        active: newStatus === 'active',
        newTask: newStatus === 'newTask',
        completed: newStatus === 'completed',
        failed: newStatus === 'failed',
      };
    });

    // update the counts
    const newTaskCounts = {
      active: updatedTasks.filter(t =>t.active).length,
      newTask: updatedTasks.filter(t =>t.newTask).length,
      completed: updatedTasks.filter(t =>t.completed).length,
      failed: updatedTasks.filter(t =>t.failed).length,
    };

    // update employee in context and localstorage
    const updatedEmployees = userData.employees.map(emp => emp.name === data.name ? {
      ...emp, tasks: updatedTasks, taskCounts: newTaskCounts
    } : emp);
    setLocalStorage({...userData, employees: updatedEmployees});
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }

  return (
    <div id='tasklist' className='h-[55%] w-full mt-16 flex items-center justify-start gap-5 py-5 flex-nowrap overflow-x-auto'>
      {data.tasks.map((elem, idx) => {
        if(elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              onComplete={() => updateTaskStatus(idx, 'completed')}
              onFail={() => updateTaskStatus(idx, 'failed')}
            />
          )
        }
        if(elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              onAccept={() => updateTaskStatus(idx, 'active')} 
            />
          )
        }
        if(elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList
