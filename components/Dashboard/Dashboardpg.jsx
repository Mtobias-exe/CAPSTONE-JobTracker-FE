
import './Dashboardpg.css'
import React, { useEffect, useState } from 'react'
import serviceCall, {ACTIONS} from '../../services/apiServices'
import { Link } from 'react-router-dom'
import editIcon from '/edit.png'
import deleteIcon from '/delete.jpg'
import AddPg from '../AddPage/AddPg'


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

  const statusColor = {
    pending: '#B5B4B4',
    rejected: '#D87D7D',
    accepted: '#ADE08D'
  }

  function renderJobs() {
    if (jobs.length > 0) {
      return (
        <section className='table-body'>
          
        <table className='content-table'>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Notes</th>
              <th></th>
            </tr>
          </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.companyName}</td>
              <td>{job.jobTitle}</td>
              <td>{new Date(job.date).toLocaleDateString()}</td>
              <td>
                <span style={{background: statusColor[job.status]}} className='status-color'>{job.status}</span>
              </td>
              <td>{job.notes}</td>
              <td>
                <Link to={`/edit/${job._id}`}>
                <button className='edit'>
                  <img src={editIcon} className='edit-icon'/>
                  </button>
                </Link>

                <button onClick={() => handleDelete(job._id)} className='delete'><img src={deleteIcon} className='delete-icon'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      );
    } else {
      return <p>No job applications found</p>; 
    }
  }

  

  return (
    <>
    <section className='dashboard'>
      <div className='dashboard-container'>
      
      <div className='add-container'>
      <Link to="/addjob">
            <button className='add'>Add Job</button>
      </Link>
      </div>

        <div >
          {renderJobs()}
        </div>
      
      </div>
    </section>
    </>
  )
}

export default Dashboardpg