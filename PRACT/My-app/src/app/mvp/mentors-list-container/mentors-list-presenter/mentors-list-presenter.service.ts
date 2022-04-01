import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {Overlay,} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mentors ,filterdata} from '../../mentors-model';
import { FilterPresentationComponent } from '../mentors-list-presentation/filter-presentation/filter-presentation.component';



@Injectable({
  providedIn: 'root'
})
export class MentorsListPresenterService {

  public mentor:mentors[]=[];
  private delete: Subject<number>;
  public delete$: Observable<number>;
  public filterdata!:mentors[] | null;
  public filterdata$:Subject<mentors[]>;

  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = new Observable();

    this.delete$ = this.delete.asObservable();
    this.filterdata$ = new Subject<mentors[]>();
   }
   public onDelete(id: number) {
    this.delete.next(id);
  }

  displayoverlay(mentorList:mentors[]){

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
    componentRef.instance.filterdata.subscribe((res : any) =>{
      
      //get keys of array
      let dataKey = Object.keys(mentorList[0]);

      let newData = [...mentorList];
      
      dataKey.forEach((item : any) => {
        if (res[item]) {
          console.log(res[item])
          newData = newData.filter((data : any) => {
            return data[item] == res[item]
          });
        }
       
      });
      console.log(newData);
      this.filterdata$.next(newData);
      overlayRef.detach();      
    });

    componentRef.instance.close.subscribe(res=> 
      overlayRef.detach()
      )
       overlayRef.backdropClick().subscribe(result=>{
      overlayRef.detach();
    })

    // componentRef.instance.close.subscribe(() => {
    //   overlayRef.detach();
    // });
    // overlayRef.backdropClick().subscribe(()=> {
    //   // overlayRef.detach();
    // })
    componentRef.instance.filterdata.subscribe(res=>console.log(res));
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.mentor, event.previousIndex, event.currentIndex);
  // }
}
