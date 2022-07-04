import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  console.log(request);
  // const token='wedecvfdukjvdcsx';
  // request=request.clone({
  //   headers:request.headers.set("Authorization",`Bearer ${token}`)
  // })
    let httpauth=request.headers.get('Token')
    httpauth='exampleToken'+httpauth
    request=request.clone({
    headers:request.headers.set('Token',httpauth)
    })

  // request=request.clone({
  //   setHeaders:{
  //     Authorization: `Bearer ${token}`
  //   }
  // });

  //  let httpauth=request.headers.get('Authorization')
  //  httpauth='exampleInterceptors'+httpauth
  //  request.headers.set('Authorization',httpauth)
  //  console.log("authhh",httpauth);
   

    return next.handle(request);

  }
}
