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
  constructor(private listservice:OrderListPresenterService,private router:Router,private cdr: ChangeDetectorRef) { 
    this.delete = new EventEmitter();
    this.userList =[];
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
    this.cdr.markForCheck();
}
}
