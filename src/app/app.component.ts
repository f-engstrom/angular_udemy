import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerElements= [ { "type": "server", "name": "new server", "content": "this is a new server" }];



  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.ServerElements.push({"type": 'server', "name": serverData.serverName, "content": serverData.serverContent});
  }

  onBluePrintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.ServerElements.push({"type": 'blueprint', "name": blueprintData.serverName, "content": blueprintData.serverContent});

  }
}
