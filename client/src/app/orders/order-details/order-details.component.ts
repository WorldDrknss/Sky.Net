import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute, private breadCrumbService: BreadcrumbService, private orderService: OrdersService) {
    this.breadCrumbService.set('@OrderDetails', ' ');
   }

  ngOnInit(): void {
    this.orderService.getOrderDetails(+this.route.snapshot.paramMap.get('id')).subscribe({
      next: (order: IOrder) => {
        this.order = order;
        this.breadCrumbService.set('@OrderDetails', `Order# ${order.id} - ${order.status}`);
      },
      error: (e: any) => { console.log(e); },
      complete: () => { console.log('completed'); }
    })
  }
}
