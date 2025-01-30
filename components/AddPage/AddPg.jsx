import React, { useState} from 'react'
import './AddPg.css'
import serviceCall, {ACTIONS} from '../../services/apiServices';

const AddPg = ({entry, setEntry}) => {
   const [formData, setFormData] = useState({
      companyName: '',
      jobTitle: '',
      date: '',
      status: '',
      notes: ''
  });

  function handleChange(e) {
    setFormData({ [e.target.name]: e.target.value });
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    try{
      let res = await serviceCall(ACTIONS.create, formData);
      console.log("Response received:", res); 
      setEntry([res, ...entry]);

      setFormData({
      companyName: '',
      jobTitle: '',
      date: '',
      status: '',
      notes: ''
      });
    } catch (err) {
      console.error("theres an error with submission:", err);
    }
  }

  return (
    <section>
    <form onSubmit={handleSubmit}>
     
    <label htmlFor="companyName">Company Name</label>
      <input
      type='text'
      id='companyName'
      name='companyName'
      value={formData.companyName}
      onChange={handleChange}
      />
      
      <label htmlFor="jobTitle">Job Title</label>
      <input
       type='text'
       id='jobTitle'
       name='jobTitle'
       value={formData.jobTitle}
       onChange={handleChange}
      />
      
      <label htmlFor="date">Date</label>
      <input
       type='date'
       id='date'
       name='date'
       value={formData.date}
       onChange={handleChange}
      />

      <label htmlFor="status">Status</label>
      <select
       id='status'
       name='status'
       value={formData.status}
       onChange={handleChange}
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
       onChange={handleChange}
      />

      <button
      type='submit'
      >
      +
      </button>

    </form>
    </section>
  )
}

export default AddPg