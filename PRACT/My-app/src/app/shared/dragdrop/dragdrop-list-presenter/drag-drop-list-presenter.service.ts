import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragDropListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;
  constructor() {
    this.delete = new Subject();
    this.delete$ = new Observable();

    this.delete$ = this.delete.asObservable();
   }
  // Show file content
  public viewFile(content: string, type: string) {

    let b64 = content.split(',')[1];
    const byteCharacters = atob(b64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });
    const url = URL.createObjectURL(blob)
    window.open(url)

  }

  // DELETE DATA
  public onDelete(id: number) {
    this.delete.next(id);
  }
}
