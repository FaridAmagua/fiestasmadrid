import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent {
  addformproducts: FormGroup;
  loading: boolean = false;
  id:number;
  operation:string = 'Add '
 
  constructor(private fb: FormBuilder,
    private _productService:ProductService,
    private router:Router,
    private toastr:ToastrService,
    private aRoute:ActivatedRoute,
    ){
    this.addformproducts =  this.fb.group({
      product_name: ['',Validators.required],
      stock: ['1',Validators.required],
    })
    this.id = Number(aRoute.snapshot.paramMap.get('id')); // captura del id del url 
    console.log(this.id);
    // console.log(aRoute.snapshot.paramMap.get('id'))
  }
  ngOnInit():void{
    if (this.id != 0) {
      //edit 
      this.operation = 'Edit '; // if id is 0 is label is Edit
      this.getProduct(this.id);
    }
  }
  getProduct(id:number){
    this.loading = true;
    this._productService
    this._productService.getProduct(id).subscribe((data:Product) =>{
    // console.log(data);
    this.loading=false;
    this.addformproducts.patchValue({
      product_name: data.product_name,
      stock: data.stock,
      })
    })
  }
  addProduct(){
    // console.log(this.addformproducts.value.product_name);
    // console.log(this.addformproducts.get('product_name')?.value);

    const product: Product = {
      product_name: this.addformproducts.value.product_name,
      stock: this.addformproducts.value.stock
    }
    
    this.loading=true;

    this._productService.saveProduct(product).subscribe(() => {
      console.log('Product added ')
      this.loading=false;
      this.toastr.success('product '+product.product_name+' added');
      this.router.navigate(['/list']);
    })
  }

}
