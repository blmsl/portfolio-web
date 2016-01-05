import {Injectable}   from 'angular2/core';
import {Http}         from 'angular2/http';

@Injectable()
export class HeaderService {
  private http:Http;

  constructor(http:Http) {
    this.http = http;
  }

  getImageIds() {
    return this.http.get('/imageids');
  }
}
