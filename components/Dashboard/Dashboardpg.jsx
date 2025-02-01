
import './Dashboardpg.css'
import React, { useEffect, useState } from 'react'
import serviceCall, {ACTIONS} from '../../services/apiServices'
import { Link } from 'react-router-dom'


function Dashboardpg() {
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    async function getData() {
      try {
        let data = await serviceCall(ACTIONS.read);
        setJobs(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    getData(); 
  }, []); 

 async function handleDelete(_id){
    try {
      await serviceCall(ACTIONS.delete, null, _id)
      
      let updatedJobs = jobs.filter( job => job._id !== _id)
      setJobs(updatedJobs)
      
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  } 

  function renderJobs() {
    if (jobs.length > 0) {
      return (
        <table>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.companyName}</td>
              <td>{job.jobTitle}</td>
              <td>{job.date}</td>
              <td>{job.status}</td>
              <td>{job.notes}</td>
              <td>
                <Link to={`/edit/${job._id}`}>
                <button>Update</button>
                </Link>

                <button onClick={() => handleDelete(job._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      );
    } else {
      return <p>No job applications found</p>; 
    }
  }

  

  return (
    <>
    <section className='dashboard'>
    <Link to="/addjob">
      <button>Add Job</button>
    </Link>
      <div className='dashboard-container'>
        <div className='title-container'>
        <table>
          <thead>
            <tr className='title-list'>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
        </table>
        </div>

        <div className='job-list'>
          {renderJobs()}
        </div>

      </div>

    </section>
    </>
  )
}

export default Dashboardpg