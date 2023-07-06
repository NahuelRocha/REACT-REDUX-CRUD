import { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await StudentService.getAllStudent();
      setStudent(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = studentId => {
    StudentService.deleteStudent(studentId)
      .then(response => {
        fetchData();
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='text-center mb-8'>
      <h2 className='text-4xl mt-4 mb-3 text-white/90'>List Student</h2>
      <Link
        to='/add-student'
        className='py-1 px-2 md:py-2 md:px-5 font-semibold border border-blue-200 bg-blue-400 text-white hover:bg-red-400 transition-all duration-500 rounded-md flex mx-auto my-2 w-fit '
      >
        Add Student
      </Link>
      <div className='flex justify-center mx-auto'>
        <table className=' bg-gray-300 rounded-xl w-1/5 md:w-3/5'>
          <thead className=''>
            <tr className=''>
              <th className='px-1 md:px-8 py-3 text-sm md:text-xl font-normal text-black/80'>
                Id
              </th>
              <th className='px-1 md:px-8 text-sm md:text-xl font-normal text-black/80'>
                Last Name
              </th>
              <th className='px-1 md:px-8 text-sm md:text-xl font-normal text-black/80'>
                First Name
              </th>
              <th className='md:px-8 text-sm md:text-xl font-normal text-black/80'>
                Email
              </th>
              <th className='px-1 text-sm md:text-xl font-normal text-black/80'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {student.map((stu, bg) => (
              <tr
                className={bg % 2 == 0 ? 'bg-gray-200' : 'bg-gray-300'}
                key={stu.id}
              >
                <td className='border border-gray-600 text-sm md:text-md'>
                  {stu.id}
                </td>
                <td className='border border-gray-600 text-sm md:text-md'>
                  {stu.firstName}
                </td>
                <td className='border border-gray-600 text-sm md:text-md'>
                  {stu.lastName}
                </td>
                <td className='border border-gray-600 text-sm md:text-md px-5 py-2'>
                  {stu.emailId}
                </td>
                <td className='border border-gray-600 text-sm md:text-md '>
                  <Link
                    to={`/add-student/${stu.id}`}
                    className='flex items-center justify-center py-2  px-1  bg-green-400 font-light md:font-semibold border border-white rounded-lg text-white hover:bg-slate-500 opacity-100 transition-all duration-300'
                  >
                    Update
                  </Link>
                  <button
                    className='flex items-center justify-center py-2 w-full px-1  bg-red-400 font-light md:font-semibold border border-white rounded-lg text-white hover:bg-slate-500 opacity-100 transition-all duration-300'
                    onClick={() => deleteStudent(stu.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
