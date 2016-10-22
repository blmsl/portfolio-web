'use strict';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {WrappedError} from '../definitions/wrapped.error';

export function wrapError(err: Response): Observable<WrappedError> {
  let wrappedError: WrappedError;

  try {
    wrappedError = {
      status: err.status,
      content: err.json()
    };
  } catch (jsonError) {
    wrappedError = {
      status: err.status,
      content: err.text() || jsonError.message
    };
  }
  console.warn(`${wrappedError.status}: ${(wrappedError.content && JSON.stringify(wrappedError.content) || '-')}`);

  return Observable.throw(wrappedError);
}
