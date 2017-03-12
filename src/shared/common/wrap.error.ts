import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {WrappedError} from '../definitions/wrapped.error';

export const wrapError = (err: Response): Observable<WrappedError> => {
  let wrappedError: WrappedError;

  try {
    wrappedError = {
      content: err.json(),
      status: err.status,
    };
  } catch (jsonError) {
    wrappedError = {
      content: err.text() || jsonError.message,
      status: err.status,
    };
  }
  console.warn(`${wrappedError.status}: ${(wrappedError.content && JSON.stringify(wrappedError.content) || '-')}`);

  return Observable.throw(wrappedError);
};
