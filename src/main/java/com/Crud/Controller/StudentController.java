package com.Crud.Controller;

import Exceptions.ResourceNotFoundException;
import com.Crud.Model.Student;
import com.Crud.Repository.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {

    private StudentRepository studentRepository;


    @GetMapping()
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @GetMapping("{id}")
    public ResponseEntity<Student> getStundent(@PathVariable Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + id));
        return ResponseEntity.ok(student);
    }

    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@RequestBody Student studentUpdate, @PathVariable Long id) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: " + id));
        existingStudent.setFirstName(studentUpdate.getFirstName());
        existingStudent.setLastName(studentUpdate.getLastName());
        existingStudent.setEmailId(studentUpdate.getEmailId());
        studentRepository.save(existingStudent);
        return ResponseEntity.ok(existingStudent);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteStudent(@PathVariable Long id){
        try {
            Student student = studentRepository.findById(id)
                    .orElseThrow(()-> new ResourceNotFoundException("Student not exist with id: " + id));
            studentRepository.delete(student);
            return new  ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
