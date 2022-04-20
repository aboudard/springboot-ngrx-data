import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fileup } from "../dto/fileup";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  endpoint = '/upload/';

  constructor(private httpClient: HttpClient) {
  }

  postFile(fileToUpload: File): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('fileUpload', fileToUpload, fileToUpload.name);

    return this.httpClient.post(this.endpoint, formData, { responseType: 'text' });
  }

  getFiles(): Observable<Fileup[]> {
    return this.httpClient.get<Fileup[]>(this.endpoint);
  }

}
