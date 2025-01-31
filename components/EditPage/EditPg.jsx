import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import serviceCall, { ACTIONS } from '../../services/apiServices';
import './EditPg.css';

const EditPg = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    date: '',
    status: '',
    notes: ''
  });

  useEffect(() => {
    async function fetchJob() {
      try {
        const data = await serviceCall(ACTIONS.read, formData, id);
        setFormData(data);
      } catch (error) {
        console.error('Failed to fetch job details:', error);
      }
    }

    fetchJob();
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const updatedData = await serviceCall(ACTIONS.update, formData, id);
      if (updatedData) {
        alert('Update successful'); 
       
        setFormData(updatedData);
      }
    } catch (error) {
      console.error('Failed to update job:', error);
      alert('Update failed');
    }
  }

  return (
    <section>
      <form onSubmit={handleUpdate}>
        <label htmlFor="companyName">Company Name</label>
        <input type='text' id='companyName' name='companyName' value={formData.companyName} onChange={handleChange} />

        <label htmlFor="jobTitle">Job Title</label>
        <input type='text' id='jobTitle' name='jobTitle' value={formData.jobTitle} onChange={handleChange} />

        <label htmlFor="date">Date</label>
        <input type='date' id='date' name='date' value={formData.date} onChange={handleChange} />

        <label htmlFor="status">Status</label>
        <select id='status' name='status' value={formData.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
          <option value="accepted">Accepted</option>
        </select>

        <label htmlFor="notes">Notes</label>
        <input type='text' id='notes' name='notes' value={formData.notes} onChange={handleChange} />

        <button type='submit'>Update</button>
      </form>

      <Link to="/dashboard">
        <button>Done</button>
      </Link>
    </section>
  );
}

export default EditPg;