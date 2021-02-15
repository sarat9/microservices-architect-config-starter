package com.microservices.offers.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class OffersController {
	
	
    Logger logger = LoggerFactory.getLogger(OffersController.class);

	
	@GetMapping("/offers" )
	public String getOffers() {		
		try {
			logger.info("Getting Offers");
			return "List Of Offers Data";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
