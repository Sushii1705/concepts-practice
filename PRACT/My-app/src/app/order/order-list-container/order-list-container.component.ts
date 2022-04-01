import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { orders } from '../order-model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list-container',
  templateUrl: './order-list-container.component.html',
  styleUrls: ['./order-list-container.component.scss']
})
export class OrderListContainerComponent implements OnInit {
  public order:orders[]=[];

  public orderList$: Observable<orders[]>;
  constructor(private service:OrderService) { 
    this.orderList$ = new Observable();

  }

  ngOnInit(): void {
    this.orderList$ = this.service.getdata();

  }

  delete(id: number) {
   
    this.service.deleteorder(id).subscribe((res: orders) => {
      console.log(res);
      this.orderList$ = this.service.getdata();
    });
  }
}
