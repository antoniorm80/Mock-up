import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    private ApiUrl = "https://peticiones.online/api/products";

  constructor(private http:HttpClient) { }

  getProductos() {
    return this.http.get<any>(this.ApiUrl);
  }
}
