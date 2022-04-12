import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any> {
    return this
            .http
              .get("https://jsonplaceholder.typicode.com/photos")
            .pipe(
              map(res => res)
          );
      }
}
