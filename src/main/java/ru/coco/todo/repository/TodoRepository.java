package ru.coco.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import ru.coco.todo.model.Todo;

/**
 * Created by a10282 on 11/04/2018.
 */
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
