import AddPg from '../AddPage/AddPg'
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

  function renderJobs() {
    if (jobs.length > 0) {
      return (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <p>{job.companyName}</p>
              <p>{job.jobTitle}</p>
              <p>{job.date}</p>
              <p>{job.status}</p>
              <p>{job.notes}</p>
            </li>
          ))}
        </ul>
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
        <div className='title'>

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