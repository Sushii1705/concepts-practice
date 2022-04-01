import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { orders } from '../order-model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form-container',
  templateUrl: './order-form-container.component.html',
  styleUrls: ['./order-form-container.component.scss']
})
export class OrderFormContainerComponent implements OnInit {
  public id!: string;

  public orderData$: Observable<orders>

  constructor(private service:OrderService,private router:Router, private activatedRoute:ActivatedRoute) { 
    this.orderData$ = new Observable();
    console.log(this.activatedRoute)
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
    
  if (this.id) {
    this.orderData$ = this.service.getorderById(this.id);
  }

  }

  ngOnInit(): void {
  }
  postData(data:orders){
    debugger
    this.service.postdata(data).subscribe((res) => {
      alert('data add successfully');
      this.router.navigateByUrl('order/list');
    });
  }
  editdata(orderForm: orders) {
    this.service.editorder(orderForm,this.id).subscribe(
      (res: any) => {
        alert('Edit success')
        this.router.navigateByUrl('order/list');
      }
    );
  }

}
