import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from 'src/app/basket/basket.service';
import { IDeliveryMethods } from 'src/app/shared/models/deliveryMethods';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
@Input() checkoutForm: FormGroup;
deliveryMethods: IDeliveryMethods[];

  constructor(private checkoutService: CheckoutService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe({
      next: (dm: IDeliveryMethods[]) => { this.deliveryMethods = dm; },
      error: (e: any) => { console.log(e); },
      complete: () => { console.log('completed') }
    });
  }

  setShippingPrice(deliveryMethod: IDeliveryMethods){
    this.basketService.setShippingPrice(deliveryMethod);
  }

}
