import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private httpClient: HttpClient) {}

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = '/upload/';
    const formData: FormData = new FormData();
    formData.append('fileUpload', fileToUpload, fileToUpload.name);

    return this.httpClient.post(endpoint, formData, { responseType: 'text' });
  }
}
