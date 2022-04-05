import React from 'react'
import { NavLink } from 'react-router-dom'


const ButtonLink = ({ name, fun, tolink }) => {
  return (
    <NavLink to={tolink}>
      <button  type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-color2 rounded-lg border border-color9 hover:bg-color9 hover:text-white focus:z-10 focus:ring-2 focus:ring-color2 focus:bg-color9 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
        {name}
      </button>
    </NavLink>

  )
}

export default ButtonLink