import React from 'react';
import {Link} from 'react-router-dom';
const Viewalljobs = () => {
  return (
    <section className="p-6">
          <div className="flex justify-center">
            <Link to="/jobs" className='text-center px-20 py-2 bg-black text-white rounded-sm hover:bg-gray-800'>
              View All Jobs
            </Link>
          </div>
      </section>

  )
}

export default Viewalljobs;