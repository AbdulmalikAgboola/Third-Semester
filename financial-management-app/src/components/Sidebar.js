import React from 'react'
import DashboardIcon from './SvgComponents/DashboardIcon';
import HelpIcon from './SvgComponents/HelpIcon';
import InvoiceIcon from './SvgComponents/InvoiceIcon';
import Logo from './SvgComponents/Logo';
import LogoutIcon from './SvgComponents/LogoutIcon';
import LogoWithText from './SvgComponents/LogoWithText';
import SettingsIcon from './SvgComponents/SettingsIcon';
import TransactionsIcon from './SvgComponents/TransactionsIcon';
import WalletIcon from './SvgComponents/WalletIcon';

 function Sidebar() {
    

    return (
        <div className="bg-gray-color-1 w-24 md:w-64 px-2 md:px-6 pb-12 md:pb-24 h-screen">
           <div className='md:hidden w-16 md:w-32 pl-6 pr-24 h-7 pt-7 pb-14'>
            <Logo />
           </div>
            <div className ="hidden md:block w-16 md:w-32 pl-6 pr-24 h-7 pt-7 pb-14">
          <LogoWithText />

            </div>
           <aside aria-label="Sidebar">
   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
         <li>
            <a href="./" className="flex items-center p-2 font-sans text-color-main  rounded-lg dark:text-white hover:bg-primary-color dark:hover:bg-primary-color">
               <DashboardIcon />
      <span className="hidden md:flex flex-1 ml-3">Dashboard</span>
            </a>
         </li>
         <li>
         <a href="./" className="flex items-center p-2 font-sans text-color-main  rounded-lg dark:text-white hover:bg-primary-color dark:hover:bg-primary-color">
               <TransactionsIcon />
               <span className="hidden md:flex flex-1 ml-3 whitespace-nowrap">Transactions</span>
              
            </a>
         </li>
         <li>
         <a href="./" className="flex items-center p-2 font-sans text-color-main  rounded-lg dark:text-white hover:bg-primary-color dark:hover:bg-primary-color">
               <InvoiceIcon />
               <span className="hidden md:flex flex-1 ml-3 whitespace-nowrap">Invoices</span>
            </a>
         </li>
         <li>
         <a href="./" className="flex items-center p-2 font-sans text-color-main  rounded-lg dark:text-white hover:bg-primary-color dark:hover:bg-primary-color">
         <WalletIcon />
               <span className="hidden md:flex flex-1 ml-3 whitespace-nowrap">My Wallets</span>
            </a>
         </li>
         <li>
         <a href="./" className="flex items-center p-2 font-sans text-color-main  rounded-lg dark:text-white hover:bg-primary-color dark:hover:bg-primary-color">
             <SettingsIcon />

               <span className="hidden md:flex flex-1 ml-3 whitespace-nowrap">Settings</span>
            </a>
         </li>
      </ul>
   </div>
   <div className = "pt-36">
       <ul>
       <li>
       <a href="./" className="flex items-center p-2 font-sans text-color-main  rounded-lg dark:text-white hover:bg-primary-color dark:hover:bg-primary-color">
        <HelpIcon />
               <span className="hidden md:flex flex-1 ml-3 whitespace-nowrap">Help</span>
            </a>
         </li>
         <li>
         <a href="./" className="flex items-center p-2 font-sans text-color-main  rounded-lg dark:text-white hover:bg-primary-color dark:hover:bg-primary-color">
                    <LogoutIcon />

               <span className="hidden md:flex flex-1 ml-3 whitespace-nowrap">Log Out</span>
            </a>
         </li>   
       </ul>
   </div>
</aside> 
        </div>
    )
}

export default Sidebar;