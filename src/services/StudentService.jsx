import Axios from 'axios';

const STUDENT_RESTAPI_URL = 'http://localhost:8080/student';

class StudentService {
  getAllStudent() {
    return Axios.get(STUDENT_RESTAPI_URL);
  }
  addStudent(student) {
    return Axios.post(STUDENT_RESTAPI_URL, student);
  }
  getStudentById(id) {
    return Axios.get(STUDENT_RESTAPI_URL + '/' + id);
  }
  updateStundent(studentId, student) {
    return Axios.put(STUDENT_RESTAPI_URL + '/' + studentId, student);
  }
  deleteStudent(id) {
    return Axios.delete(STUDENT_RESTAPI_URL + '/' + id);
  }
}

export default new StudentService();
