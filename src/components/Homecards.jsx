import React from 'react';
import Cards from './Cards';
import {Link} from 'react-router-dom';

const Homecards = () => {
  return (
    <>
        <section className="py-4">
         <div className="flex lg:py-10 lg:px-20">
            <div className="px-2 md:px-20 grid gap-3 w-full grid-cols-1 md:grid-cols-2 justify-center">
                <Cards>
                <h1 className="font-bold text-xl md:text-2xl">For Developers</h1>
                    <p className="font-normal">Browse our React jobs and start your career today</p>
                    <Link to="/jobs" className="px-4 py-2 bg-indigo-500 text-white inline-block rounded hover:bg-indigo-400">Browse Jobs</Link>
                </Cards>
                <Cards bg="bg-indigo-100">
                <h1 className="font-bold text-xl md:text-2xl">For Employers</h1>
                    <p className="font-normal">List your job to find the perfect developer for the role</p>
                    <Link to="/Add-Job" className="px-4 py-2 bg-indigo-500 text-white inline-block rounded hover:bg-indigo-400">
                        Add Job</Link>
                </Cards>
            </div>
        </div>
    </section>
    </>
  )
}

export default Homecards