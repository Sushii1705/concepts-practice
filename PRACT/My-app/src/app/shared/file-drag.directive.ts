import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileDrag]'
})
export class FileDragDirective {
  @Output() public filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();

  @HostBinding('style.background') private background = '#eee';
  

  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';
  @HostBinding('style.border-radius') private borderRadius = '5px';
  public width25:number = 50;

  constructor() { }
  @HostListener('dragover', ['$event']) public onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'lightgray';
    this.borderColor = 'cadetblue';
    this.borderStyle = '3px solid';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = `radial-gradient(
			circle closest-side,
			white 0,
			white ${this.width25}%,
			transparent 58.74%,
			transparent 66%,
			white 0
		),
		conic-gradient(
			#4e79a7 0,
			#4e79a7 38%,
			#f28e2c 0,
			#f28e2c 61%,
			#e15759 0,
			#e15759 77%,
		)`;
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
  }

  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
    let file = evt.dataTransfer;
    let valid_files: Array<File> = file;
    // for (let file of evt.dataTransfer.files) {
    //   if ((file.size / (1024 ** 2)) < 2) {
    //     valid_files.push(file);
    //   } else {
    //     console.error("File size limit (2 MB) exceeded");
    //   }
    // }
    this.filesChangeEmiter.emit(valid_files);
  }


}
