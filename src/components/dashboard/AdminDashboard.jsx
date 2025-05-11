import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTasks from '../others/AllTasks';

const AdminDashboard = (props) => {

  return (
    <div className="min-h-screen w-full p-6 sm:p-10 text-white">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
