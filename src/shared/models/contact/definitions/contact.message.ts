'use strict';
export class ContactMessage {
  public name:string;
  public email:string;
  public text:string;
  public heuning:string;

  constructor(name?:string,
              email?:string,
              text?:string,
              heuning?:string) {
    this.name = name;
    this.email = email;
    this.text = text;
    this.heuning = heuning;
  }
}
