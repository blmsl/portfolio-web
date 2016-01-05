import {Component, View, OnInit}        from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {FooterService}                  from './../../services/footer.service';
import {Link}                           from './../../definitions/footer/link';

@Component({
  selector: 'footer',
  providers: [Http, HTTP_PROVIDERS, FooterService],
})
@View({
  templateUrl: './components/footer/footer.html',
  styleUrls: ['./components/footer/footer.css'],
})
export class FooterComponent implements OnInit {
  public links:Array<Link>;
  public currentDate:Date;
  public lastModified:string;

  constructor(private _footerService:FooterService) {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.getLinks();
    this.getLastModified();
  }

  getLinks() {
    this._footerService.getLinks().then(
        links =>
            this.links = links
    );
  }

  getLastModified() {
    this._footerService.getLastModified().subscribe(
        (res:Response) =>
            this.lastModified = res.text(),
        (err:Response) =>
            this.lastModified = '???'
    );
  }
}
