import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'] // Cambiar de string a array de strings
})
export class ListCardsComponent implements OnInit { // Corregir "ngOninit" a "implements OnInit"
  listProducts: Product[] = [
    // { id: 11, product_name: 'cocacola', stock: 2 },
    // { id: 22, product_name: 'cocacola', stock: 2 },
    // {id:33,product_name : 'cocacola ',stock:2},
  ];
  loading:boolean =   false;

  constructor(private _productService: ProductService,private toastr : ToastrService) { }

  ngOnInit(): void { 
    this.getListProducts();
  }

  getListProducts() {
    // console.log('Antes de la solicitud HTTP');
    this.loading = true;

    // settimeout
    this._productService.getListProducts().subscribe((data) => {
        this.listProducts = data;
        this.loading = false;
      });
  }
  deleteProduct(id:number) {
    // console.log(id)
    this._productService.deleteProduct(id).subscribe((data => {
      this.getListProducts();
      this.toastr.warning('the product has been deleted');
    }))
  }
}
