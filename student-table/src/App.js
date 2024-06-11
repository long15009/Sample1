import './App.css';

import React, { useState } from 'react';
import StudentTable from './components/studentTable';
import StudentForm from './components/studentForm';


function App() {
  const [students, setStudents] = useState([]); //khởi tạo
  const [editingIndex, setEditingIndex] = useState(null); 

  function handleAddOrUpdateStudent(student) {
    if (editingIndex !== null) {
      const updatedStudents = students.map(function(s, index) {
        return index === editingIndex ? student : s;
      });
      setStudents(updatedStudents); 
      setEditingIndex(null); 
    } else {
      setStudents(students.concat(student));
    }
  }


  function handleEditStudent(index) {
    setEditingIndex(index);
  }


  function handleDeleteStudent(index) {
    const updatedStudents = students.filter(function(_, i) {
      return i !== index;
    });
    setStudents(updatedStudents); 
  }

  return (
    <div class = "all">
      <h1>Thông tin sinh viên</h1>
      
      <StudentForm
        onSubmit={handleAddOrUpdateStudent}
        studentToEdit={editingIndex !== null ? students[editingIndex] : null}
      />
    
      <StudentTable
        students={students}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
}

export default App;
