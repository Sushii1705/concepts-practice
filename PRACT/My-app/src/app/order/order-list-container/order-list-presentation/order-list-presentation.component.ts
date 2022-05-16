import { formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { orders } from '../../order-model';
import { OrderListPresenterService } from '../order-list-presenter/order-list-presenter.service';

@Component({
  selector: 'app-order-list-presentation',
  templateUrl: './order-list-presentation.component.html',
  styleUrls: ['./order-list-presentation.component.scss'],
  viewProviders: [OrderListPresenterService]
})
export class OrderListPresentationComponent implements OnInit {

  @Input() public set orderList(value: orders[] | null) {
    // console.log(value);
    if (value) {
      if(!this._orderListOrignal){
        this._orderListOrignal = value;
      }
      this. _orderList = value;
    }
  }
  public get orderList(): orders[] | null {
    return this._orderList;
  }
  private _orderList!: orders[];
 
  private _orderListOrignal!:orders[];

  public userList:orders[];
  sortItems:any;
  @Output() public delete: EventEmitter<number>;

  // minDate: Date;
  // maxDate: Date;
  today: Date;
  maxDate: Date;
  minDate: Date;
  

  constructor(private listservice:OrderListPresenterService,private router:Router,private cdr: ChangeDetectorRef) { 
    this.delete = new EventEmitter();
    this.userList =[];
    this.minDate = new Date();
    this.maxDate = new Date();
    // this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.today = new Date();
    // this.minDate = new Date(this.today.getFullYear(), this.today.getMonth());
    this.minDate.setFullYear(this.minDate.getFullYear() - this.minDate.getFullYear() +1);
    this.maxDate = new Date(this.today.getFullYear(), this.today.getMonth(), 25);
  }

  ngOnInit(): void {
    this.listservice.delete$.subscribe((res: number) => {
      this.delete.emit(res);
      alert('data deleted');
      this.router.navigateByUrl('order/list');
    });
    this.listservice.filterdata$.subscribe(res => {
      this._orderList =res;
    })
  }
  isInvalidDate( event: any ){
    let test = event.target.value;
    
    if ( test == 'Invalid date' ){
      event.target.value = ''; // Change it here
    }}
  onDelete(id: number) {
    this.listservice.onDelete(id);
  }
  edit(id:number){
    this.router.navigateByUrl(`order/edit/${id}`);
  }
  filterOverlay(){
    this.listservice.openfilterForm(this._orderListOrignal);
  }

   //pagination
   changePage(userList:orders[]) {
    this.userList = userList;
    this.cdr.detectChanges();
}
}
