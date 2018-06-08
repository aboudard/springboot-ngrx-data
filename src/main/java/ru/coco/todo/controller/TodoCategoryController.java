package ru.coco.todo.controller;

import org.springframework.web.bind.annotation.*;
import ru.coco.todo.model.Todo;
import ru.coco.todo.model.TodoCategory;
import ru.coco.todo.repository.TodoCategoryRepository;
import ru.coco.todo.repository.TodoRepository;

import java.util.Optional;

/**
 * Created by a10282 on 11/04/2018.
 */
@RestController
@RequestMapping("/api")
public class TodoCategoryController {

    private TodoCategoryRepository todoCategoryRepository;

    public TodoCategoryController(TodoCategoryRepository todoCategoryRepository) {
        this.todoCategoryRepository = todoCategoryRepository;
    }

    @GetMapping(value = "/todocategories")
    public Iterable<TodoCategory> todoCategories() {
        return todoCategoryRepository.findAll();
    }

    @GetMapping(value = "/todocategory/{id}")
    public Optional<TodoCategory> todoCategory(@PathVariable long id) {
        return todoCategoryRepository.findById(id);
    }

    @DeleteMapping(value = "/todocategory/{id}")
    public void deleteTodoCategory(@PathVariable long id) {
        todoCategoryRepository.deleteById(id);
    }


    @PostMapping(value = "/todocategory")
    public TodoCategory postTodoCategory(@RequestBody TodoCategory todoCategory) {
        return todoCategoryRepository.save(todoCategory);
    }

    @PutMapping(value = "/todocategory/{id}")
    public TodoCategory putTodoCategory(@PathVariable long id, @RequestBody TodoCategory todoCategory) {
        todoCategory.setId(id);
        return todoCategoryRepository.save(todoCategory);
    }
}
