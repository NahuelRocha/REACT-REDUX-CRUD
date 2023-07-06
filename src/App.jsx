import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddStudentComponent from './components/AddStudentComponent';

function App() {
  return (
    <div className='min-h-screen bg-gray-600'>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<StudentList />} />
          <Route path='/add-student' element={<AddStudentComponent />} />
          <Route path='/add-student/:id' element={<AddStudentComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
