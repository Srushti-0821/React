import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [studentData, setStudentData] = useState({
    firstName: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    birthDate: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setStudent(response.data);
        setStudentData({
          firstName: response.data.firstName,
          email: response.data.email,
          phone: response.data.phone,
          address: response.data.address,
          gender: response.data.gender,
          birthDate: response.data.birthDate,
        });
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${id}`, studentData)
      .then((response) => {
        console.log('Student updated successfully:', response.data);
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };

  if (!student) return <div>Loading...</div>;

  return (
    <div>

      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit}>

        <label> Name:
          <input type="text" value={studentData.firstName} onChange={(e) => setStudentData({ ...studentData, firstName: e.target.value })}
          required />
        </label>
        
        <br />
        
        <label> Email:
          <input type="email" value={studentData.email} onChange={(e) => setStudentData({ ...studentData, email: e.target.value })}
          required />
        </label>
        
        <br />
        
        <label> Phone:
          <input type="text" value={studentData.phone} onChange={(e) => setStudentData({ ...studentData, phone: e.target.value })}
          required />
        </label>
        
        <br />
        
        <label> Address:
          <input  type="text" value={studentData.address} onChange={(e) => setStudentData({ ...studentData, address: e.target.value })}
          required />
        </label>
        
        <br />
        
        <label> Gender:
          <select value={studentData.gender} onChange={(e) => setStudentData({ ...studentData, gender: e.target.value })} required >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
       
        <br />
       
        <label> Birthdate:
          <input type="date" value={studentData.birthDate} onChange={(e) => setStudentData({ ...studentData, birthDate: e.target.value })}
          required />
        </label>
        
        <br />
        
        <button type="submit">Update Student</button>

      </form>
      
    </div>
  );
};

export default EditStudent;