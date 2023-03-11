import React from 'react';
import SearchIcon from './SvgComponents/SearchIcon';
import NotificationIcon from './SvgComponents/NotificationIcon';
import { useApp } from '../utils/AppContext';


const Navbar = ({page}) => {

  const [parameter, setParameter] = useApp();

  return (
    <div className='w-full'>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
      <h2 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{parameter.currentPage}</h2>  
      <div className='flex'>
  <a className='mt-3 mr-10'> <SearchIcon /></a>
  <a className='mt-3 mr-10'>  <NotificationIcon /></a>
  <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
</div>
  </div>

     </div>


</nav>
    </div>
  )
}

export default Navbar