import React from 'react';
import {useState} from 'react';
import {FaMapMarker} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Joblist = ({job}) => {

  const [showFullDescription,setShowFullDescription] = useState(false);

  let description = job.description;

  if(!showFullDescription){
    description = description.substring(0,90) + "...";
  }

  return (
    <div className="shadow-lg bg-white rounded-lg p-4 relative">
    <p className="">{job.type}</p>
    <h1 className="font-bold md:text-xl">{job.title}</h1>
    <p className="text-sm md:font-semibold mt-4">{description}</p>

    <button onClick={() => setShowFullDescription((prevState)=>!prevState)} className="mt-2 text-indigo-800 text-lg">{showFullDescription ? "Less" : "More"}</button>
    <p className="text-indigo-700 my-4">{job.salary}</p>
    <div className="border-b border-gray-200 mb-5"></div>
    <div className="flex justify-between items-center">
      <p className="text-red-700 mb-4 flex items-center w-1/2">
        <FaMapMarker className='mr-1'/>
        {job.location}
      </p>
      <Link to={`/jobs/${job.id}`} className="text-center bg-indigo-600 px-4 py-2 text-white rounded-lg my-4">
        Read More</Link>
      </div>
</div>
  )
}

export default Joblist;