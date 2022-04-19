package ru.coco.todo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import ru.coco.todo.model.Todo;
import ru.coco.todo.repository.TodoRepository;
import ru.coco.todo.storage.FileStorage;
import ru.coco.todo.storage.FileSystemStorageService;
import ru.coco.todo.storage.StorageFileNotFoundException;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/upload")
public class FileUploadController {


    private TodoRepository todoRepository;

    private final FileSystemStorageService storageService;

    @Autowired
    public FileUploadController(
            FileSystemStorageService storageService,
            TodoRepository todoRepository
    ) {
        this.storageService = storageService;
        this.todoRepository = todoRepository;
    }

    @PostMapping("/")
    public ResponseEntity<?> handleFileUpload(@RequestParam("fileUpload") MultipartFile file) {
        try {
            storageService.store(file);
            //redirectAttributes.addFlashAttribute("message", "You successfully uploaded " + file.getOriginalFilename() + "!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity("Successfully uploaded - " + file.getOriginalFilename(), new HttpHeaders(), HttpStatus.OK);

    }

    @PostMapping(path="/mixed", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<?> handleMixed(@RequestPart("todo") Todo todo, @RequestPart("fileUpload") MultipartFile file) {
        try {
            todoRepository.save(todo);
            storageService.store(file);
            //redirectAttributes.addFlashAttribute("message", "You successfully uploaded " + file.getOriginalFilename() + "!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity("Successfully uploaded - " + file.getOriginalFilename(), new HttpHeaders(), HttpStatus.OK);

    }

    @GetMapping("/")
    @ResponseBody
    public List<FileStorage> listUploadedFiles() throws IOException {

        return storageService.loadAll()
                .map(
                    path -> new FileStorage(path.getFileName().toString(),MvcUriComponentsBuilder.fromMethodName(FileUploadController.class,
                        "serveFile", path.getFileName().toString()).build().toString()))
                .collect(Collectors.toList());

    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }

}
