import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(() => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
  };

  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName || ""} ${student.lastName || ""}`.toLowerCase();
    const email = (student.email || "").toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase())
    );
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="student-list-wrapper">
      
      <h2>Student List</h2>

      <input type="text" placeholder="Search by name or email" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      className="searchbar" />

      <div className="student-list">
        {filteredStudents.length === 0 ? (
          <p>No students found.</p>
        ) : (
          filteredStudents.map((student) => (
            <div key={student.id} className="student-card">
              <p><strong>ID:</strong> {student.id}</p>
              <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>

              {student.address && typeof student.address === "object" ? (
                <div>
                  <p><strong>Address:</strong></p>
                  <p>{student.address.street}</p>
                  <p>{student.address.city}, {student.address.state} {student.address.postalCode}</p>
                  <p>{student.address.country}</p>
                </div>
              ) : (
                <p><strong>Address:</strong> {student.address}</p>
              )}

              <p><strong>Gender:</strong> {student.gender}</p>
              <p><strong>Birthdate:</strong> {student.birthDate}</p>

              <Link to={`/edit-student/${student.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default StudentList;