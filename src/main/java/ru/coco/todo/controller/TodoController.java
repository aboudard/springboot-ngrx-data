package ru.coco.todo.controller;

import org.springframework.web.bind.annotation.*;
import ru.coco.todo.model.Todo;
import ru.coco.todo.repository.TodoRepository;

import java.util.Optional;

/**
 * Created by a10282 on 11/04/2018.
 */
@RestController
@RequestMapping("/")
public class TodoController {

    private TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping(value = "/todos")
    public Iterable<Todo> todos() {
        return todoRepository.findAll();
    }

    @GetMapping(value = "/todo/{id}")
    public Optional<Todo> todo(@PathVariable long id) {
        return todoRepository.findById(id);
    }

    @DeleteMapping(value = "/todo/{id}")
    public void deleteTodo(@PathVariable long id) {
        todoRepository.deleteById(id);
    }


    @PostMapping(value = "/todo")
    public Todo postTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }

    @PutMapping(value = "/todo/{id}")
    public Todo putTodo(@PathVariable long id, @RequestBody Todo todo) {
        todo.setId(id);
        return todoRepository.save(todo);
    }
}
