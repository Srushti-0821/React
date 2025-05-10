import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

const StudentDetail = () => {
  const { id } = useParams(); 
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/users/${id}`)
  //     .then((response) => {
  //       setStudent(response.data);
  //       setLoading(false);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user detail:', error);
  //       setLoading(false);
  //     });
  // }, [id]);

  useEffect(() => {
  axios.get(`http://localhost:3000/users/${id}`)
    .then((response) => {
      setStudent(response.data);
      setLoading(false); // 👈 Don't forget this!
    })
    .catch((error) => {
      console.error('Error fetching user detail:', error);
      setLoading(false);
    });
  }, [id]);


  if (loading) return <div>Loading...</div>;

  if (!student) return <div>Student not found</div>;

  return (
    <div className="student-detail">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Address:</strong> {student.address}</p>
    </div>
  );
};

export default StudentDetail;