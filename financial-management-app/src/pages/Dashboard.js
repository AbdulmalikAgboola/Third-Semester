import React from 'react'
import Layout from '../components/Layout'

function Dashboard() {
  return (
    <div>
      {/*   <Layout page = 'Dashboard' /> */}
        <div className='container grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 bg-primary-color'>
                <p>Text</p>
        </div>
        <div className='col-span-1 bg-secondary-color'>
            <p>Text</p>
         </div>
        </div>
    </div>
  )
}

export default Dashboard