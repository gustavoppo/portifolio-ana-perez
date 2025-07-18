import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GitHub {
  constructor(private http: HttpClient) {}

  fetchRawFile(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
