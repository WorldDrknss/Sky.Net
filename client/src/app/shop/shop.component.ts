import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/producttype';
import { ShopParams } from '../shared/models/shopparams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  products: IProduct[];
  brands: IBrand[];
  productType: IType[];
  shopParams: ShopParams;
  totalCount: number;
  sortOptions = [
    {name: 'Name', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];

  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParams();
   }

  ngOnInit(): void {
    this.getProducts(true);
    this.getBrands();
    this.getTypes();
  }

  getProducts(useCache = false){
    this.shopService.getProducts(useCache).subscribe(
      {
        next: (response) => {
          this.products = response.data;
          this.totalCount = response.count;
        },
        error: (e: any) => { console.log(e); },
        complete: () => { console.log('complete'); }
      }
    );
  }

  getBrands(){
    this.shopService.getBrands().subscribe(
      {
        next: (response) => { this.brands = [{id: 0, name: 'All'}, ...response]; },
        error: (e: any) => { console.log(e); },
        complete: () => { console.log('complete'); }
      }
    );
  }

  getTypes(){
    this.shopService.getTypes().subscribe(
      {
        next: (response) => { this.productType = [{id: 0, name: 'All'}, ...response]; },
        error: (e: any) => { console.log(e); },
        complete: () => { console.log('complete'); }
      }
    );
  }

  onBrandSelected(brandId: number){
    const params = this.shopService.getShopParams();
    params.brandId = brandId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onTypeSelected(typeId: number){
    const params = this.shopService.getShopParams();
    params.typeId = typeId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onSortSelected(sort: string){
    const params = this.shopService.getShopParams();
    params.sort = sort;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onPageChange(e: any){
    const params = this.shopService.getShopParams();
    if (params.pageNumber !== e){
      params.pageNumber = e;
      this.shopService.setShopParams(params);
      this.getProducts(true);
    }
  }

  onSearch(){
    const params = this.shopService.getShopParams()
    params.search = this.searchTerm.nativeElement.value;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  OnReset(){
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }

}
