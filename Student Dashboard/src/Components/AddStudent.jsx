import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    birthDate: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/users', student)
      .then((response) => {
        console.log('Student added successfully:', response.data);
        setStudent({
          name: '',
          email: '',
          phone: '',
          address: '',
          gender: '',
          birthDate: '',
        });
        navigate('/students');
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  };

  return (
    <div>

      <h2>Add New Student</h2>
      
      <form onSubmit={handleSubmit}>
        <label> Name:
          <input type="text" name="name" value={student.name} onChange={handleChange} required />
        </label>

        <br />
        
        <label> Email:
          <input type="email"  name="email" value={student.email} onChange={handleChange} required />
        </label>
        
        <br />
        
        <label> Phone:
          <input type="text" name="phone" value={student.phone} onChange={handleChange} required />
        </label>
        
        <br />
        
        <label> Address:
          <input type="text" name="address" value={student.address} onChange={handleChange} required />
        </label>
       
        <br />
       
        <label> Gender:
          <select name="gender" value={student.gender} onChange={handleChange} required >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        
        <br />
        
        <label> Birthdate:
          <input type="date" name="birthdate" value={student.birthDate} onChange={handleChange} required />
        </label>
        
        <br />
        
        <button type="submit">Add Student</button>

      </form>

    </div>
  );
};

export default AddStudent;