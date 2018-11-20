package ru.coco.todo.storage;

public class FileStorage {
    private String nameFile;
    private String urlFile;

    public FileStorage(String nameFile, String urlFile) {
        this.nameFile = nameFile;
        this.urlFile = urlFile;
    }

    public String getNameFile() {
        return nameFile;
    }

    public void setNameFile(String nameFile) {
        this.nameFile = nameFile;
    }

    public String getUrlFile() {
        return urlFile;
    }

    public void setUrlFile(String urlFile) {
        this.urlFile = urlFile;
    }
}
