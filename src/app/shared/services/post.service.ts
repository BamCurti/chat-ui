import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(userId: string): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.httpClient.get(url);
  }
}
