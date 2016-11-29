import {LINKS} from '../models/links';
import {Link} from '../definitions/link';

export class FooterService {

  static getLinks(): Promise<Array<Link>> {
    return Promise.resolve(LINKS);
  }
}
