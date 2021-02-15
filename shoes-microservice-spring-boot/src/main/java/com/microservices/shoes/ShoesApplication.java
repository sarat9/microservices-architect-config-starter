package com.microservices.shoes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class ShoesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoesApplication.class, args);
	}

}
