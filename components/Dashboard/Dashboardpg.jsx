import React, { useState } from 'react'
import './Dashboardpg.css'



const Dashboardpg = () =>{
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    date: '',
    status: '',
    notes: ''
});

  return (
    <section>
    <form>
     
    <label htmlFor="companyName">Company Name</label>
      <input
      type='text'
      id='companyName'
      name='companyName'
      value={formData.companyName}
      />
      
      <label htmlFor="jobTitle">Job Title</label>
      <input
       type='text'
       id='jobTitle'
       name='jobTitle'
       value={formData.jobTitle}
      />
      
      <label htmlFor="date">Date</label>
      <input
       type='date'
       id='date'
       name='date'
       value={formData.date}
      />

      <label htmlFor="status">Status</label>
      <select
       id='status'
       name='date'
       value={formData.status}
      >
      <option value="pending">Pending</option>
      <option value="rejected">Rejected</option>
      <option value="accepted">Accepted</option>
    </select>

      <label htmlFor="note">Notes</label>
      <input
       type='text'
       id='note'
       name='note'
       value={formData.notes}
      />

    </form>
    </section>
  )
}

export default Dashboardpg