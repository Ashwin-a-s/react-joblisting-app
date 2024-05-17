import {useState} from 'react'
import { useNavigate, useLoaderData,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJob = ( { updateNewJob } ) => {
     const job = useLoaderData();

     const [type,setType] = useState(job.type);
    const [title,setTitle] = useState(job.title);
    const [description,setDescription] = useState(job.description);
    const [contactEmail,setContactEmail] = useState(job.company.contactEmail);
    const [salary,setSalary] = useState(job.salary);
    const [location,setLocation] = useState(job.location);
    const [name,setName] = useState(job.company.name);
    const [company_description,setCompany_description] = useState(job.company.description);
    const [contactPhone,setContactPhone] = useState(job.company.contactPhone);


     const {id} = useParams();
     const navigate = useNavigate();

     const updateForm = (e) =>{
        e.preventDefault();
        const updatedJob = {
            id,
            type,
            title,
            description,
            location,
            salary,
            company : {
              name,
              description: company_description,
              contactEmail,
              contactPhone

            },
        };
        updateNewJob(updatedJob);

        toast.success("Updated Successfully");

        return navigate(`/jobs/${id}`);
    }

    
  return (
    <section className='bg-indigo-50'>
        <div className="container m-auto py-20 max-w-2xl">
            <div className='bg-white shadow-md rounded-lg px-6 py-8'>
              <form onSubmit={updateForm}>
                <h1 className='text-2xl font-bold text-center mb-4'>Update Job</h1>
                <div className='mb-4'>
                  <label htmlFor='type' className="font-bold block">
                    Job Type
                  </label>
                  <select id="type" name="type" className='border shadow-xl rounded px-4 py-2 w-full font-bold' required value={type} onChange = {(e) => setType(e.target.value)} >
                    <option value="Full-Time">Full-time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label htmlFor='title' className="font-bold block">
                    Job Title
                  </label>
                  <input type="text" id="title" name="title" className='w-full px-3 py-2 border shadow-xl rounded' placeholder='eg.react-developer' value={title} onChange = {(e) => setTitle(e.target.value)}></input>
                </div>

                <div className='mb-4'>
                <label htmlFor='description' className="font-bold block">
                   Description 
                  </label>
                  <textarea id="description" name="description" className='w-full px-3 py-3 border-2 border-gray-300 shadow-xl rounded' placeholder='Add any job duties,expectations,requirements etc...' rows="4" value={description} onChange = {(e) => setDescription(e.target.value)}>
                  </textarea>
                </div>

                <div className='mb-4'>
                  <label htmlFor='type' className="font-bold block">
                    Salary
                  </label>
                  <select id="salary" name="salary" className='border  shadow-xl rounded px-4 py-2 w-full font-bold' required value={salary} onChange = {(e) => setSalary(e.target.value)}>
                    <option value="Under $50k">Under $50K</option>
                    <option value="$50K - $60K">$50K - $60K</option>
                    <option value="$60K - $70K">$60K - $70K</option>
                    <option value="$70K - $80K">$70K - $80K</option>
                    <option value="$80K - $90K">$80K - $90K</option>
                    <option value="$90K - $100K">$90K - $100K</option>
                    <option value="$100K - $125K">$100K - $125K</option>
                    <option value="$125K - $150K">$125K - $150K</option>
                    <option value="$150K - $175K">$150K - $175K</option>
                    <option value="$175K - $200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>      
                  </select>
                </div>

                <div className='mb-4'>
                  <label htmlFor='title' className="font-bold block">
                    Location
                  </label>
                  <input type="text" id="location" name="location" className='w-full px-3 py-2 border shadow-xl rounded' placeholder='Company Location'  value={location} onChange = {(e) => setLocation(e.target.value)}></input>
                </div>

                <h1 className='text-2xl font-bold my-4'>Company details : </h1>

                <div className='mb-4'>
                  <label htmlFor='company' className="font-bold block">
                    Company Name
                  </label>
                  <input type="text" id="name" name="name" className='w-full px-3 py-2 border shadow-xl rounded' placeholder='Company Name'  value={name} onChange = {(e) => setName(e.target.value)}></input>
                </div>

                <div className='mb-4'>
                <label htmlFor='company_description' className="font-bold block">
                   Company Description 
                  </label>
                  <textarea id="company_description" name="company_description" className='w-full px-3 py-3 border-2 border-gray-300 shadow-xl rounded' placeholder='What does your company do??' rows="4"  value={company_description} onChange = {(e) => setCompany_description(e.target.value)}>
                  </textarea>
                </div>

                <div className='mb-4'>
                  <label htmlFor='contactEmail' className="font-bold block">
                    Contact Email
                  </label>
                  <input type="email" id="contactEmail" name="contactEmail" className='w-full px-3 py-2 border shadow-xl rounded' placeholder='Email Address for Applicants'  value={contactEmail} onChange = {(e) => setContactEmail(e.target.value)}></input>
                </div>

                <div className='mb-4'>
                  <label htmlFor='contactPhone' className="font-bold block">
                    Contact Phone
                  </label>
                  <input type="tel" id="contactPhone" name="contactPhone" className='w-full px-3 py-2 border shadow-xl rounded' placeholder='Optional phone for applicants'  value={contactPhone} onChange = {(e) => setContactPhone(e.target.value)}></input>
                </div>

                <div>
                  <button className='px-4 py-2 bg-blue-500 text-center w-full text-white font-bold rounded-lg hover:bg-blue-400' type="submit">
                    Update Job
                  </button>
                </div>
              </form>  
            </div>  
        </div>
    </section>
  )
}

export default EditJob