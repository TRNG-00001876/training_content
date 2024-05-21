package com.example.Sample_project;

import com.example.Sample_project.DTO.CustomerSaveDTO;
import com.example.Sample_project.Service.CustomerServiceIMPL;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.Sample_project.entity.Customer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SampleProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SampleProjectApplication.class, args);
	}

}