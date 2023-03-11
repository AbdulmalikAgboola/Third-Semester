import React, {useEffect} from 'react'
import {useApp} from '../utils/AppContext';
import Dashboard from '../pages/Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import Transactions from '../pages/Transactions';

function Layout() {
   const [parameter, setParameter] = useApp();
  const pages = {
    0: "Dashboard",
    1: "Transactions"
  }; 

  const page = parameter.currentPage;
 

  useEffect(() => {
    setParameter({ currentPage: pages[1] });
  }, []);


  return (
      <div className='container grid grid-cols-6'>
        <div className='col-span-1'>
    <Sidebar />
    </div>
    <div className='col-span-5 pl-10 md:pl-30'>
    <Navbar />
    { page === "Dashboard" && <Dashboard /> }
    {page === "Transactions" && <Transactions/>}
    </div>
    </div>
  
  )
}

export default Layout;