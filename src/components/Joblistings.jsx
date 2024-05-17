import React from 'react';
import Joblist from './Joblist';
import { useEffect , useState } from 'react';
import Spinner from './Spinner';

const Joblistings = ( {isHome = false} ) => {
    const [jobs,setJobs] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(  () =>{
        const fetcher = async() =>{
            const apiUrl = isHome ? "/api/jobs?_limit=3":"/api/jobs";
            try{
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            }
            catch(error){
                console.log("Error while fetching data",error);
            }finally{
                setLoading(false);
            }
            // console.log(jobs);
        }
        fetcher();
    },[]);

  return (
    <> 
        <section className="bg-indigo-100 m-2">
        <div className="p-2 md:p-4">
            <h1 className="text-indigo-700 text-3xl text-center font-bold my-2">{isHome ? "Recent jobs":"Browse Jobs"}</h1>
            
                {
                    loading ?
                    <Spinner loading={loading}/> : 

                    <>
                    <div className="grid p-2 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            
                        jobs.map((job) => (
                        <Joblist key={job.id} job={job}/>
                        
                    ))};
                    </div>
                    </>
                }
            
        </div>
    </section>
    </>

  )
}

export default Joblistings;