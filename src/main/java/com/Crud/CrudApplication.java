package com.Crud;

import com.Crud.Model.Student;
import com.Crud.Repository.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@AllArgsConstructor
public class CrudApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CrudApplication.class, args);
	}

	private StudentRepository studentRepository;

	@Override
	public void run(String... args) throws Exception {
//		Student student = new Student();
//		student.setFirstName("Nahue");
//		student.setLastName("Roch");
//		student.setEmailId("Rocha.Nahuel@Hotmail.com");
//		studentRepository.save(student);
	}
}
