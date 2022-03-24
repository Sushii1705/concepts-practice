import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterPresentationComponent } from '../mentors-list-presentation/filter-presentation/filter-presentation.component';



@Injectable({
  providedIn: 'root'
})
export class MentorsListPresenterService {


  private delete: Subject<number>;
  public delete$: Observable<number>;
  
  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = new Observable();

    this.delete$ = this.delete.asObservable();
   }
   public onDelete(id: number) {
    this.delete.next(id);
  }

  displayoverlay(){

    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .top()
        .right()
    });
    const component = new ComponentPortal(FilterPresentationComponent);
    const componentRef = overlayRef.attach(component); 
    // componentRef.instance.close.subscribe(() => {
    //   overlayRef.detach();
    // });
    // overlayRef.backdropClick().subscribe(()=> {
    //   // overlayRef.detach();
    // })
  }
}
