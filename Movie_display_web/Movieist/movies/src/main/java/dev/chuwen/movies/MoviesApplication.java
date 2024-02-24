package dev.chuwen.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}




	/*This api is a get end point, GetMapping("/sth")*/
	@GetMapping("/root")
	public String apiRoot() {
		return "hello world!";
	}


}
