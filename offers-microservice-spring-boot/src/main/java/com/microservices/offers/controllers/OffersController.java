package com.microservices.offers.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

	@GetMapping("/offers")
	public Map<String, String> getOffers() {
		try {
			logger.info("Getting Offers");
			HashMap<String, String> ordersMap = new HashMap<String, String>();
			ordersMap.put("samsung", "Samsung 10% Discount");
			ordersMap.put("nikeshoe", "Nike Sports Shoe 50% off");
			ordersMap.put("adidas", "Adidas Shoe 70% Off");
			return ordersMap;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@GetMapping("/deals")
	public String getDeals() {
		try {
			logger.info("Getting Deals");
			return "List Of Deals Data";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
