package ru.coco.todo.model;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * Created by a10282 on 11/04/2018.
 */
@Entity
public class Todo {

    private Long id;

    private String title;

    private String description;

    private Boolean active;

    private TodoCategory todoCategory;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date dateTodo;

    public Todo() {
    }

    public Todo(String title, String description, Boolean active, TodoCategory todoCategory, Date dateTodo) {
        this.title = title;
        this.description = description;
        this.active = active;
        this.todoCategory = todoCategory;
        this.dateTodo = dateTodo;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @ManyToOne(cascade = CascadeType.PERSIST)
    public TodoCategory getTodoCategory() {
        return todoCategory;
    }

    public void setTodoCategory(TodoCategory todoCategory) {
        this.todoCategory = todoCategory;
    }

    public Date getDateTodo() {
        return dateTodo;
    }

    public void setDateTodo(Date dateTodo) {
        this.dateTodo = dateTodo;
    }
}
