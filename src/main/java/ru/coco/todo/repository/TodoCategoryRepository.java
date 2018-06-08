package ru.coco.todo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.coco.todo.model.TodoCategory;

public interface TodoCategoryRepository extends PagingAndSortingRepository<TodoCategory, Long> {
}
