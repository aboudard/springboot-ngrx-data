package ru.coco.todo;

import java.util.Date;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import ru.coco.todo.model.Todo;
import ru.coco.todo.model.TodoCategory;
import ru.coco.todo.repository.TodoRepository;

@SpringBootApplication
public class TodoApplication {

	@Autowired
	private TodoRepository todoRepository;

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

	@Bean
	InitializingBean sendDatabase() {
		return () -> {
			todoRepository.save(new Todo("John", "the life of Rambo", true, new TodoCategory("Recettes"), new Date()));
			todoRepository.save(new Todo("Billy", "the Kid", true, new TodoCategory("Western"), new Date()));
		};
	}
}
