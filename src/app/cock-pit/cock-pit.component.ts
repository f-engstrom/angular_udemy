import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cock-pit',
  templateUrl: './cock-pit.component.html',
  styleUrls: ['./cock-pit.component.css']
})
export class CockPitComponent implements OnInit {
  // newServerName: any;
  // newServerContent: any;
  @ViewChild("newServerContent",{static:true}) newServerContentInput:ElementRef;
  serverElements = [];
 @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContentInput.nativeElement.value})
  }

  onAddBluePrint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContentInput.nativeElement.value})

  }
}
