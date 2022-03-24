import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MentorsListPresenterService } from '../mentors-list-presenter/mentors-list-presenter.service';
import { mentors } from '../../mentors-model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-mentors-list-presentation',
  templateUrl: './mentors-list-presentation.component.html',
  styleUrls: ['./mentors-list-presentation.component.scss'],
  viewProviders:[MentorsListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MentorsListPresentationComponent implements OnInit {

  @Input() public set mentorList(value: mentors[] | null) {
    // console.log(value);
    if (value) {
      this. _mentorList = value;
    }
  }
  public get mentorList(): mentors[] | null {
    return this._mentorList;
  }

  private _mentorList!: mentors[];
  
  @Output() public delete: EventEmitter<number>;

  constructor( private mentorListPresentor:MentorsListPresenterService,private router:Router) {
    this.delete = new EventEmitter();
   }

  ngOnInit(): void {
    this.mentorListPresentor.delete$.subscribe((res: number) => {
      this.delete.emit(res);
      alert('data deleted');
      this.router.navigateByUrl('mvp/list');
    });
  }

  onDelete(id: number) {
    this.mentorListPresentor.onDelete(id);
  }

  edit(id:number){
    this.router.navigateByUrl(`mvp/edit/${id}`);
  }
  displayoverlay(){
    this.mentorListPresentor.displayoverlay();
  }
}
