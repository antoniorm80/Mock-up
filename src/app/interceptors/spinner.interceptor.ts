import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize  } from 'rxjs';
import { LoaderService } from './../services/loader.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.busy();

    return next.handle(request).pipe(
      delay(1000),
      finalize(() => this.loaderService.Idle())
    );
  }
}
