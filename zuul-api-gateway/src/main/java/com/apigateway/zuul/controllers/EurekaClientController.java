package com.apigateway.zuul.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class EurekaClientController {

	Logger logger = LoggerFactory.getLogger(EurekaClientController.class);

	@Autowired
	private DiscoveryClient discoveryClient;

	@RequestMapping("/clients/{applicationName}")
	public @ResponseBody String getClientsByApplicationName(@PathVariable String applicationName) {
		return this.discoveryClient.getInstances(applicationName).get(0).getUri().toString();
	}

	// @RequestMapping("/clients/{applicationName}")
	// public @ResponseBody List<ServiceInstance>
	// getClientInstancesByApplicationName(@PathVariable String applicationName)
	// {
	// return this.discoveryClient.getInstances(applicationName);
	// }
}
