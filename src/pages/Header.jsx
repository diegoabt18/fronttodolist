import React from 'react'
import { NavLink } from 'react-router-dom';
import { FcMenu, FcCalendar, FcTodoList, FcParallelTasks, FcSettings } from "react-icons/fc";

const Header = () => {
  return (
    <header className='px-4 py-2 fixed bottom-0 w-full bg-color2'>
        <nav>
            <ul className='flex justify-between sm:justify-center sm:gap-12'>
              <NavLink to={"/index"} ><FcMenu style={{fontSize:"2.5rem"}}/></NavLink>
              <NavLink to={"/category"} ><FcTodoList style={{fontSize:"2.5rem"}}/></NavLink>
              <NavLink to={"/"} ><FcSettings style={{fontSize:"2.5rem"}}/></NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header