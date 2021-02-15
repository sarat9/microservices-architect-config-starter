package com.microservices.shoes.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ShoeController {

    Logger logger = LoggerFactory.getLogger(ShoeController.class);

	@GetMapping("/shoes")
	public String getShoes() {		
		try {
			logger.info("Getting Shoes");
			return "List Of Shoes Data";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
