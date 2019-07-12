import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 'servers' array contains only one element as defined below.
  servers = [{type: 'server', name: 'Test Server', content: 'Just a test'}];


  // when the event 'AddServer' is triggered, app component needs to be notified about it 
  // by passing the information 'serverName' and 'serverContent'.
  // catch the data sent by 'serverCreated' event in app component.
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.servers[0].name = 'Changed';
  }

  onDestroyFirst() {
    this.servers.splice(0, 1);
  }
}
