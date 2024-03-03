import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: any[];
  constructor(private serviceProduct: ProductosService, private http: HttpClient) {
    this.productos = [];

    // this.http.get<any>('https://peticiones.online/api/products')
    // .subscribe(response => {
    //   this.productos = response.results;
    // })

    this.serviceProduct.getProductos().subscribe(response => {      
       this.productos = response.results;
    })
  }

}
