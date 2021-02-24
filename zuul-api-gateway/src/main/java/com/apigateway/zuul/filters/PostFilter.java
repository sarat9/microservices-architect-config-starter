package com.apigateway.zuul.filters;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

public class PostFilter extends ZuulFilter {

	private static Logger logger = LoggerFactory.getLogger(PostFilter.class);

	public Object run() throws ZuulException {
		// TODO run() Contains the functionality of the filter.
		RequestContext context = RequestContext.getCurrentContext();
		HttpServletResponse response = context.getResponse();
		
		

		// Logging request information
		logger.info("Calling Zuul Post Filter");
		logger.info("Post Filter: " + String.format("Response Status Code: %s", context.getResponse().getStatus()));

		return null;
	}

	public boolean shouldFilter() {
		// TODO shouldFilter() Contains the logic that determines when to run
		// this filter (this particular filter is always run). OR set a
		// condition when to run
		return true;
	}

	@Override
	public int filterOrder() {
		// TODO filterOrder() Gives the order in which this filter is to be run,
		// relative to other filters.

		return 1;
	}

	@Override
	public String filterType() {
		// TODO filterType() Returns a String that stands for the type of the
		// filter — in this case, post. (It would be route for a routing filter.)
		return "post";
	}

}
