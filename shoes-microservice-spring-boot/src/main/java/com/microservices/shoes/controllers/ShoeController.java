package com.microservices.shoes.controllers;

import java.util.HashMap;
import java.util.Map;

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
	public Map<String, String> getShoes() {		
		try {
			logger.info("Getting Shoes");
			HashMap<String, String> shoesMap = new HashMap<String, String>();
			shoesMap.put("tommy", "Tommy Hilfiger Shoe");
			shoesMap.put("nikeshoe", "Nike Sports Shoe");
			shoesMap.put("adidas", "Adidas Running Shoe");
			return shoesMap;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
    
	@GetMapping("/shoes/sport")
	public String getSportShoes() {		
		try {
			logger.info("Getting Sport Shoes");
			return "List Of Sport Shoes Data";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
