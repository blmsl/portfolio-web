import {Injectable}     from 'angular2/core';
import {Http, Headers}  from 'angular2/http';
import {ContactMessage} from './../definitions/contact/contact.message';

@Injectable()
export class ContactService {
  private http:Http;

  constructor(http:Http) {
    this.http = http;
  }

  getErrorConfig() {
    return this.http.get('/errorconfig');
  }

  send(message:ContactMessage) {
    return this.http.post('/send',
        JSON.stringify(message),
        {
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });
  }
}
