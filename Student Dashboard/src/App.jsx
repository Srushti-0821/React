import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './Components/StudentList';
import StudentDetail from './Components/StudentDetails';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Student Management</h1>
        <nav>
          <ul>
            <li><Link to="/">Student List</Link></li>
            <li><Link to="/add-student">Add Student</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetail />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;