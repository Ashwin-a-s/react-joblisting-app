import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobPage,{jobFetcher} from './pages/JobPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage'; 
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';



const App = () => {
  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newJob),
    })
}

  const deleteJob = async(jobId) =>{

        const res = await fetch(`/api/jobs/${jobId}`,{
          method: 'DELETE'
        })
  }

  const updateJob = async(job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(job),
    });
    return;
}
const router = 
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      
      {<Route index element={<HomePage/>}/>}

      {<Route path="/jobs" element={<JobsPage />}/>}

      {<Route path="/add-job" element={<AddJob addNewJob={addJob}/>} />}

      {<Route 
      path="/jobs/:id" 
      element={<JobPage deleteJob={deleteJob}/>}
      loader={jobFetcher}
       />}

      {<Route path='/edit-job/:id' 
      element={<EditJob updateNewJob={updateJob}/>} 
      loader={jobFetcher} 
      />}
       
      {<Route path="*" element={<NotFoundPage/ >}/>}

    </Route>
  )
);

  return <RouterProvider router={router}/>
};

export default App;