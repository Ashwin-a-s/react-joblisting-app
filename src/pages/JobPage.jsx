import { Link } from 'react-router-dom';
import { useParams, useLoaderData,useNavigate } from 'react-router-dom';
import { FaArrowLeft,FaMapMarker } from 'react-icons/fa';
import { toast } from 'react-toastify';

const jobPage = ( { deleteJob }) => {
    const navigate = useNavigate();
    const job = useLoaderData();

    const deleteClick = (jobId) =>{
        const confirm = window.confirm("Are you sure u want to delete this job");
        
        if(!confirm){
            return;
        }
        deleteJob(jobId);
        toast('deleted successfully');
        navigate('/jobs');
    }
  return (
        <>
            <section className="p-6">
                
                <Link to="/jobs" className='text-indigo-700'>
                <FaArrowLeft className="inline mr-1 mb-1"/>
                Back to Job Listings</Link>
            </section>

            <section className="bg-indigo-200">
            <div className="flex flex-col md:flex-row p-1 md:p-10">
                <div className="flex flex-col space-y-4 mx-auto p-10">
                    <div className="bg-white flex flex-col space-y-4 p-6 rounded-sm">
                        <p className="text-gray-700">
                            {job.type}
                        </p>

                        <h2 className='font-bold text-3xl'>
                            {job.title}
                        </h2>
                        <p className="text-red-700">
                            <FaMapMarker className="inline mr-1 mb-1"/>
                            {job.location}
                        </p>
                    </div>
                    <div className='bg-white p-6 flex flex-col space-y-4 rounded-sm'>
                        <p className='text-indigo-600 font-bold'>Job Decription</p>
                        <p className='font-medium'>{job.description}</p>
                        <p className='text-indigo-600 font-bold'>Salary</p>
                        <p className='font-medium'>{job.salary} / Year</p>
                    </div>

                </div>

                <div className="p-10 flex flex-col space-y-4">
                    <div className="bg-white p-6 flex flex-col space-y-4 rounded-sm">
                        <p className="font-bold">Company info</p>
                        <p className='text-3xl'>{job.company.name}</p>
                        <p >{job.company.description}</p>

                        <div className="border"></div>

                        <p className="text-2xl">Contact Email:</p>
                        <p className='bg-gray-300 p-2 rounded-sm'>{job.company.contactEmail}</p>
                        <p className="text-2xl">Contact Phone:</p>
                        <p className='bg-gray-300 p-2 rounded-sm'>{job.company.contactPhone}</p>

                    </div>
                    <div className='bg-white p-4 flex flex-col space-y-4'>
                        <p className='font-bold'>Manage Job</p>
                        <Link to={`/edit-job/${job.id}`} className="bg-indigo-800 text-white text-center w-full px-4 py-2 block rounded-xl">Edit Job</Link>
         <button onClick={() =>{deleteClick(job.id)}}
                        className="bg-red-600 text-white text-center w-full px-4 py-2 block rounded-xl">Delete Job</button>
                    </div>
                </div>
            </div>  
            </section>
        </>
  )
}
const jobFetcher = async({params})=>{
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { jobPage as default, jobFetcher}






// const [job,setJob] = useState([]);
//     const [loading,setLoading] = useState(true);

//     useEffect (() =>{
//         const apiUrl = `/api/jobs/${id}`;
//         try{
//             const  fetcher = async () =>{
//                 const res = await fetch(apiUrl);
//                 const data = await res.json();
//                 setJob(data);
//             };
//             fetcher();
//         }
//         catch(error){
//             console.log("Error while fetching data",error);
//         }
//         finally{
//             setLoading(false);
//         }
//     }),[];