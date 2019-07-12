import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // New events need to be emitted in this component.
  // 'serverCreated' and 'blueprintCreated' properties declared as new events using EventEmitter, a generic type <>
  // with event data type defined within - JS object with serverName and serverContent.
  // @Output declarator is used to bind out custom events from outside.
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // serverName = '';
  // serverContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // local reference
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput.value);
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      // serverName: this.serverName, 
      // serverContent: this.serverContent
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    // this.servers.push({
    //   type: 'server',
    //   name: this.serverName,
    //   content: this.serverContent
    // });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.serverName, 
      // serverContent: this.serverContent
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    // this.servers.push({
    //   type: 'blueprint',
    //   name: this.serverName,
    //   content: this.serverContent
    // });
  }
}
