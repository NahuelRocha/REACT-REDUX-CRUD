import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';

const AddStudentComponent = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const addStudent = e => {
    e.preventDefault();
    const student = { firstName, lastName, emailId };

    if (id) {
      StudentService.updateStundent(id, student)
        .then(response => {
          navigate('/');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      StudentService.addStudent(student)
        .then(response => {
          console.log(response.data);
          navigate('/');
        })
        .catch(error => console.log(error));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await StudentService.getStudentById(id);
          const { firstName, lastName, emailId } = response.data;
          setfirstName(firstName);
          setLastName(lastName);
          setEmailId(emailId);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const tittle = () => {
    if (id) {
      return (
        <h1 className='text-4xl mt-4 mb-3 text-white/90'>Update Student</h1>
      );
    } else {
      return <h1 className='text-4xl mt-4 mb-3 text-white/90'>Add Student</h1>;
    }
  };

  return (
    <div className='text-center'>
      {tittle()}
      <form className='flex flex-col mx-auto w-4/5 md:w-2/5 bg-gray-200 p-5 rounded-lg'>
        <div className='my-1'>
          <label className='text-xl flex justify-center'>First Name</label>
          <input
            type='text'
            placeholder='Enter first Name...'
            name='firstName'
            value={firstName}
            onChange={e => setfirstName(e.target.value)}
            className='w-full text-center border rounded border-black/50 my-1 py-1'
          />
        </div>
        <div className='my-1'>
          <label className='text-xl flex justify-center'>Last Name</label>
          <input
            type='text'
            placeholder='Enter last name...'
            name='lastName'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className='w-full text-center border rounded my-1 py-1 border-black/50'
          />
        </div>
        <div className='my-1'>
          <label className='text-xl flex justify-center'>Email ID</label>
          <input
            type='text'
            placeholder='Enter email...'
            name='emailId'
            value={emailId}
            onChange={e => setEmailId(e.target.value)}
            className='w-full text-center border rounded my-1 py-1 border-black/50'
          />
        </div>
        <div className='flex items-center justify-evenly'>
          <button
            className='bg-green-400  font-semibold text-white border border-black/30 hover:bg-red-500 transition-all duration-500 py-2 px-5 rounded'
            onClick={e => addStudent(e)}
          >
            Submit
          </button>
          <Link to='/'>
            <button className='bg-red-400  font-semibold text-white border border-black/30 hover:bg-green-500 transition-all duration-500 py-2 px-5 rounded'>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddStudentComponent;
