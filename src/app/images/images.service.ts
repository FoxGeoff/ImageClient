import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '../services/http-error-handler.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductImage } from '../models/product-image';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  
  imagesUrl = 'localhost:44330/api/productimages';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ImagesService');
  }

  /** GET product images from the server */
  getImages (): Observable<ProductImage[]> {
    return this.http.get<ProductImage[]>(this.imagesUrl)
      .pipe(
        catchError(this.handleError('getImages', []))
      );
  }
  
}
