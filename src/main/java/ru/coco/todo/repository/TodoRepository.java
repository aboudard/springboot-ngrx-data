package ru.coco.todo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ru.coco.todo.model.Todo;

/**
 * Created by a10282 on 11/04/2018.
 */
public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {
}
