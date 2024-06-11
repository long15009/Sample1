
import React from 'react';

function StudentTable(props) {
  return (
    

    <table>
      <thead>
        <tr>
          <th>Tên </th>
          <th>Tuổi</th>
          <th>Giới Tính</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map(function(student, index) {
          return (
            <tr key={index}>
              <td>{student.name}</td>            
              <td>{student.age}</td>
              <td>{student.gender}</td>

              <td class="fix">
                <button class ="btn-op"onClick={function() { props.onEdit(index); }}>Sửa</button>
                <button class ="btn-op" onClick={function() { props.onDelete(index); }}>Xóa</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    
  );
}

export default StudentTable;
