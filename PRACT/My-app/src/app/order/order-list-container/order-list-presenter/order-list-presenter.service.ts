import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { orders } from '../../order-model';
import { FilterFormComponent } from '../order-list-presentation/filter-form/filter-form.component';

@Injectable({
  providedIn: 'root'
})
export class OrderListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  public filterdata$:Subject<orders[]>;
  constructor( private overlay: Overlay) { 
    this.delete = new Subject();
    this.delete$ = new Observable();

    this.delete$ = this.delete.asObservable();
    this.filterdata$ = new Subject<orders[]>();
  }
  public onDelete(id: number) {
    this.delete.next(id);
  }
  openfilterForm(currentList:orders[]){
    console.log(currentList)
    const config = new OverlayConfig();
    config.hasBackdrop = true;  
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FilterFormComponent);
    const componetRef = overlayRef.attach(component);

    componetRef.instance.closeFilter.subscribe(res=>{
      overlayRef.detach()
    });

    componetRef.instance.filterData.subscribe((res : any) =>{
      //get keys of array
      let dataKey = Object.keys(currentList[0]);

      dataKey.forEach((item : any) => {
        if (res[item]) {
          console.log(res[item])
          currentList = currentList.filter((data : any) => {
            console.log(data[item])
            return data[item] == res[item]
          });
        }
      });
      this.filterdata$.next(currentList);
      overlayRef.detach();
      console.log(currentList)
      
    });
    overlayRef.backdropClick().subscribe(result=>{
      overlayRef.detach();
    })
  }
}
