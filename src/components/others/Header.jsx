import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data.name}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-2xl'>Logout</button>
    </div>
  )
}

export default Header
