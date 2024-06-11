
import React, { useState, useEffect } from 'react';


function StudentForm(props) {
  const [name, setName] = useState(''); 
  const [age, setAge] = useState('');   
  const [gender, setGender] = useState('');   



  useEffect(function() {
    if (props.studentToEdit) {
      setName(props.studentToEdit.name); 
      setAge(props.studentToEdit.age); 
      setGender(props.studentToEdit.gender); 

       
    } else {
      setName(''); 
      setAge(''); 
      setGender(''); 

    }
  }, [props.studentToEdit]);

 
  function handleSubmit(e) {
    e.preventDefault(); 
    props.onSubmit({ name: name, age: age,gender: gender }); 
    setName(''); 
    setAge('');
    setGender('');

  }


  function handleNameChange(e) {
    setName(e.target.value);
  }


  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  function handleGenderChange(e) {
    setGender(e.target.value);
  }
  return (
    <form class="formSub" onSubmit={handleSubmit}>
      <div class="box">
        <label class="tl">Tên :</label>
        <input class="box-input" type="text" value={name} onChange={handleNameChange} required />
      </div>
      <div class="box">
        <label class="tl">Giới Tính :</label>
        <input class="box-input" type="text" value={gender} onChange={handleGenderChange} required />
      </div>
      <div class="box">
        <label class="tl ">Tuổi :</label>
        <input  class="box-input age" type="number" value={age} onChange={handleAgeChange} required />
      </div>
      <button class="btn"type="submit">THÊM</button>
    </form>
  );
}

export default StudentForm;
