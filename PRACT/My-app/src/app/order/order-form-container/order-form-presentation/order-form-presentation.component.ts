import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { orders } from '../../order-model';
import { OrderFormPresenterService } from '../order-form-presenter/order-form-presenter.service';

@Component({
  selector: 'app-order-form-presentation',
  templateUrl: './order-form-presentation.component.html',
  styleUrls: ['./order-form-presentation.component.scss'],
  viewProviders: [OrderFormPresenterService],
})
export class OrderFormPresentationComponent implements OnInit {
  @Input() public set orderData(value: orders | null) {
    // console.log(value);
    if (value) {
      console.log(value);
      // this.customerForm.controls['age'].disable();
      console.log(this.orderForm);
      this.orderForm.patchValue(value);
      this._orderData = value;
    }
  }
  public get orderData(): orders | null {
    return this._orderData;
  }

  @Output() public add: EventEmitter<orders>;
 @Output() public edit: EventEmitter<orders>;


  private _orderData!: orders;

  public orderForm: FormGroup;
  // public mentorForm:FormGroup;

  constructor(private service: OrderFormPresenterService) {
    this.add = new EventEmitter<orders>();
    this.edit = new EventEmitter();


    this.orderForm = this.service.buildform();
  }

  ngOnInit(): void {
    this.service.subjectData$.subscribe((res) => {
      if(this._orderData){
        this.edit.emit(res);
      }
      else{
        this.add.emit(res)
      }
    });
  }
  onSubmit() {
    console.log(this.orderForm.value);
    this.service.submitData(this.orderForm.value);
  }
}
