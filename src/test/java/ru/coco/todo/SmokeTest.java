package ru.coco.todo;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

import java.io.File;
import java.util.Date;

import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import ru.coco.todo.model.Todo;

@SpringBootTest
public class SmokeTest {



	@Test
	public void contextLoads() throws Exception {

		final WebClient webClient = WebClient.builder().build();

		MultipartBodyBuilder builder = new MultipartBodyBuilder();
		builder.part("todo", new Todo(
				"smoke", "description", true, null, new Date()
		), MediaType.APPLICATION_JSON);
		builder.part("fileUpload", new FileSystemResource(new File("D:\\github\\springboot-ngrx-data\\input.txt")));

		webClient.post()
				.uri("http://localhost:8080/upload/mixed")
				.contentType(MediaType.MULTIPART_FORM_DATA)
				.body(BodyInserters.fromMultipartData(builder.build()))
				.retrieve()
				.bodyToMono(String.class)
				.block();
	}

}
